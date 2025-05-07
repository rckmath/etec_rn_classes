// Exercício de React Native: useState e useEffect

// Modifique o componente Counter abaixo para que, além de incrementar o contador:
// 1. Tenha um botão para decrementar o contador.
// 2. O valor inicial do contador seja 10 ao invés de 0. [OK!]
// 3. Utilize o useEffect para exibir no console uma mensagem especial quando o contador chegar a zero ('Contador chegou a zero!').
// 4. Utilize outro useEffect para alertar o usuário sempre que o contador for múltiplo de 5 (exceto o valor inicial).

import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const Counter = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log("Contador atualizado:", count);
  }, [count]);

  // Adicione aqui o useEffect para exibir mensagem especial quando contador for 0
  useEffect(() => {
    if (count === 0) {
      console.log("Contador chegou a zero!");
    }
  }, [count]);

  // Adicione aqui o useEffect para alertar o usuário quando contador for múltiplo de 5
  useEffect(() => {
    if (count % 5 === 0) {
      Alert.alert("Contador é múltiplo de 5!");
    }
  }, [count]);

  return (
    <View>
      <Text>Contador: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
      <Button title="Decrementar" onPress={() => setCount(count - 1)} />
    </View>
  );
};

export default Counter;
