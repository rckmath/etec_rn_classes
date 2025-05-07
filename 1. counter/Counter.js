// Exercício de React Native: useState e useEffect

// Modifique o componente Counter abaixo para que, além de incrementar o contador:
// 1. Tenha um botão para decrementar o contador.
// 2. O valor inicial do contador seja 10 ao invés de 0.
// 3. Utilize o useEffect para exibir no console uma mensagem especial quando o contador chegar a zero ('Contador chegou a zero!').
// 4. Utilize outro useEffect para alertar o usuário sempre que o contador for múltiplo de 5 (exceto o valor inicial).

import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Contador atualizado:', count);
  }, [count]);

  // Adicione aqui o useEffect para exibir mensagem especial quando contador for 0
  
  // Adicione aqui o useEffect para alertar o usuário quando contador for múltiplo de 5

  return (
    <View>
      <Text>Contador: {count}</Text>
      <Button title="Incrementar" onPress={() => setCount(count + 1)} />
      {/* Adicione aqui o botão para decrementar */}
    </View>
  );
};

export default Counter;

