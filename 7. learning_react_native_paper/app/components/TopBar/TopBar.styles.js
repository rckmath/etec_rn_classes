import { StyleSheet } from "react-native";
import { theme } from "../../_layout";
const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: theme.colors.primary, // Nubank purple color
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    paddingHorizontal: 16,
  },
  logoContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  spacer: {
    flex: 1,
  },
  exitButton: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    zIndex: 2,
  },
  exitButtonText: {
    color: theme.colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
  logo: {
    height: 70,
    aspectRatio: 1,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default styles;
