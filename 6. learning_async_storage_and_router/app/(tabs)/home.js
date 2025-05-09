import { useContext } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

import TopBar from "../components/TopBar";
import InfoDaConta from "../components/InfoDaConta";

import { UserContext } from "../contexts/user.context";

const HomeScreen = () => {
  const { user, saldo } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={{ padding: 20, gap: 15 }}>
        <View style={styles.cardContainer}>
          <Text style={styles.helloWorldTitle}>Olá, {user?.name || "usuário"}</Text>
          <View style={styles.saldoContainer}>
            <Text style={styles.saldoCurrency}>R$</Text>
            <Text style={[styles.saldoDescription, { color: saldo < 0 ? "#e74c3c" : "#0009" }]}>{Number(saldo).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
          </View>
        </View>
        <InfoDaConta saldo={saldo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: "#8A05BE", // Nubank purple color
    height: "100%",
  },
  containerTitle: {
    // CSS -> margin-top: 10px;
    marginHorizontal: 170,
    // CSS -> justify-content: center;
    justifyContent: "center",
    // CSS -> align-items: center;
    alignItems: "center",
  },
  cardContainer: {
    padding: 40,
    borderRadius: 30,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
  },
  helloWorldTitle: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#8A05BE",
    marginBottom: 10,
  },
  saldoContainer: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  saldoCurrency: {
    color: "#8A05BE",
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 6,
    lineHeight: 45,
  },
  saldoDescription: {
    fontSize: 48,
    fontWeight: "bold",
  },
});

export default HomeScreen;
