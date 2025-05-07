import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { TopBar } from "./src/components/TopBar";
import { MainContent } from "./src/components/MainContent";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <MainContent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8A05BE", // Nubank purple color
    height: "100%",
  },
});

export default App;
