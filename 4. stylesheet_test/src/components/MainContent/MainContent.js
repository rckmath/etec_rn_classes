import React from "react";
import { View, Text } from "react-native";
import styles from "./MainContent.styles";

const MainContent = () => {
  return (
    <View style={{ padding: 20 }}>
      <View style={styles.cardContainer}>
        <Text style={styles.helloWorldTitle}>Olá, Erick</Text>
      </View>
    </View>
  );
};

export default MainContent;
