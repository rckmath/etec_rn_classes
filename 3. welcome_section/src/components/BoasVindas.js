import { Text, View, Button, StyleSheet, Alert } from "react-native";

export const BoasVindas = ({ msgBoasVindas, tituloBtn, msgAlerta }) => {
  const handlePress = () => {
    Alert.alert(msgAlerta);
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.welcomeText}>{msgBoasVindas}</Text>
      <Button title={tituloBtn} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 10,
  },
});
