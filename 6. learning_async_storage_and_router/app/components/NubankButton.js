import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const COLORS = {
  primary: "#8A05BE",
  secondary: "#fff",
  secondaryText: "#8A05BE",
  primaryText: "#fff",
  pressed: "#7200a8",
  border: "#8A05BE",
};

const NubankButton = ({ title, onPress, color = "primary", style }) => {
  const isPrimary = color === "primary";
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary ? styles.primary : styles.secondary,
        style,
      ]}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Text style={isPrimary ? styles.primaryText : styles.secondaryText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  secondary: {
    backgroundColor: COLORS.secondary,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  primaryText: {
    color: COLORS.primaryText,
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.5,
  },
  secondaryText: {
    color: COLORS.secondaryText,
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.5,
  },
});

export default NubankButton; 