import { StyleSheet } from "react-native";
import { theme } from "../../_layout";



const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 28,
    width: "90%",
    alignSelf: "center",
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 6,
    gap: 18,
  },
  input: {
    backgroundColor: theme.colors.background,
    borderWidth: 0,
    padding: 18,
    fontSize: 24,
    borderRadius: 10,
    marginBottom: 0,
    color: "#222",
  },
  passwordInputWrapper: {
    position: "relative",
    justifyContent: "center",
  },
  passwordInput: {
    paddingRight: 44, // space for the eye icon
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 0,
    bottom: 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  showButton: {
    marginLeft: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "#eee",
  },
  showButtonText: {
    color: theme.colors.primary,
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default styles;
