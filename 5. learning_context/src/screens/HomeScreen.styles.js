import { StyleSheet } from "react-native";

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
    // CSS -> font-weight: bold;
    fontWeight: "bold",
    // CSS -> font-size: 36px;
    fontSize: 32,
    // CSS -> color: green;
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
    lineHeight: 40,
  },
  saldoDescription: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#27ae60", // green for positive, can be changed dynamically
  },
});

export default styles;
