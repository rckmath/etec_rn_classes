// Exercício de React Native: Componentização de Trechos de Código
//
// Modifique o componente App abaixo para que:
// 1. Identifique a seção que contém a mensagem de boas-vindas e o botão que exibe um alerta.
// 2. Extraia essa seção para um componente separado (por exemplo, WelcomeSection).
// 3. Substitua a seção original pela importação e utilização do novo componente.
// 4. Faça o seu novo componente receber via props os textos exibidos.
//

import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert("Botão clicado!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu App Simples</Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.welcomeText}>Bem-vindo ao meu app!</Text>
        <Button title="Clique Aqui" onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

