import { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

import { getCotacao } from "./_services/cotacao";

const HomeScreen = () => {
  const [cotacaoAnterior, setCotacaoAnterior] = useState(0);
  const [cotacao, setCotacao] = useState(0);

  const chamarApiCotacao = async () => {
    try {
      const retornoCotacao = await getCotacao("bitcoin");
      console.log(retornoCotacao.data);
      setCotacaoAnterior(cotacao);
      setCotacao(retornoCotacao.data.bitcoin.brl);
    } catch (error) {
      console.log(error.message);
    }
  };

  const pollingRef = useRef(null);

  useEffect(() => {
    chamarApiCotacao();

    const startPolling = () => {
      pollingRef.current = setInterval(() => {
        chamarApiCotacao();
      }, 10000);
    };
    startPolling();

    return () => {
      clearInterval(pollingRef.current);
    };
  }, []);

  return (
    <View style={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 18, color: "#7d7d7d" }}>BTC/BRL: R$ {cotacaoAnterior.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</Text>
      <Text style={{ fontSize: 34 }}>BTC/BRL: R$ {cotacao.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</Text>
      <Button style={{ height: 40, marginTop: 10 }} labelStyle={{ fontSize: 20 }} mode="contained" onPress={chamarApiCotacao}>
        Atualizar cotação
      </Button>
    </View>
  );
};

export default HomeScreen;
