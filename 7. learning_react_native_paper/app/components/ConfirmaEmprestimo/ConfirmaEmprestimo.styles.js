import { StyleSheet } from "react-native";

import { theme } from "../../_layout";

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
    paddingHorizontal: 90,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: theme.colors.primary,
    textAlign: "center",
  },
});

export default styles;
