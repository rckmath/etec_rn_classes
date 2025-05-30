import { useState, useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { AuthContext } from "./_context/AuthContext";

import { useNavigation } from "expo-router";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [codigo, setCodigo] = useState("");
  const { acessar, autenticado } = useContext(AuthContext);

  useEffect(() => {
    if (autenticado) {
      navigation.navigate("screens/home");
    }
  }, [autenticado]);

  return (
    <View style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ width: "100%", padding: 20 }}>
        <Text style={{ fontSize: 40 }}>Entre com o código</Text>
        <Text style={{ fontSize: 20, color: "grey", marginTop: 30 }}>Código de acesso: {codigo}</Text>
        <TextInput label="Código" style={{ maxHeight: 70 }} value={codigo} onChangeText={setCodigo} />
        <Button
          style={{ marginTop: 20 }}
          labelStyle={{ fontSize: 20 }}
          mode="outlined"
          onPress={async () => {
            await acessar(codigo);
          }}
          icon="arrow-right"
        >
          Acessar
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;
