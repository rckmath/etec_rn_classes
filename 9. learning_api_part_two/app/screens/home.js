import { useState, useEffect, useRef, useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "expo-router";

import { getCotacao } from "../_services/cotacao";
import { AuthContext } from "../_context/AuthContext";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [cotacao, setCotacao] = useState(0);
  const [cotacaoAnterior, setCotacaoAnterior] = useState(0);

  const { deslogar, autenticado } = useContext(AuthContext);

  const chamarApiCotacao = async () => {
    try {
      const retornoCotacao = await getCotacao("bitcoin");
      setCotacaoAnterior(cotacao);
      setCotacao(retornoCotacao.data.bitcoin.brl);
    } catch (error) {
      console.error(error.message);
    }
  };

  const pollingRef = useRef(null);

  useEffect(() => {
    chamarApiCotacao();

    const startPolling = () => {
      pollingRef.current = setInterval(() => {
        chamarApiCotacao();
      }, 15000);
    };
    startPolling();

    return () => {
      clearInterval(pollingRef.current);
    };
  }, []);

  useEffect(() => {
    if (!autenticado) {
      navigation.navigate("index");
    }
  }, [autenticado]);

  return (
    <View style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        mode="outlined"
        style={{ marginBottom: 100 }}
        onPress={async () => {
          await deslogar();
        }}
      >
        Sair
      </Button>
      <Text style={{ fontSize: 18, color: "#7d7d7d" }}>BTC/BRL: R$ {cotacaoAnterior.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</Text>
      <Text style={{ fontSize: 34 }}>BTC/BRL: R$ {cotacao.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</Text>
      <Button style={{ height: 40, marginTop: 10 }} labelStyle={{ fontSize: 20 }} mode="contained" onPress={chamarApiCotacao}>
        Atualizar cotação
      </Button>
    </View>
  );
};

export default HomeScreen;
