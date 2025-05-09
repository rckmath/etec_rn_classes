import { View, StyleSheet, Image, Alert } from "react-native";
import { useContext } from "react";
import FormularioLogin from "./components/FormularioLogin";
import { UserContext } from "./contexts/user.context";
import { router } from "expo-router";
import NubankLogo from "../assets/icon.png";

const LoginScreen = () => {
  const { realizarLogin } = useContext(UserContext);

  const handleLogin = ({ cpf, password }) => {
    try {
      cpf = cpf.replace(/\D/g, "");
      realizarLogin(cpf, password);
      router.push("/home");
    } catch (error) {
      Alert.alert("Erro ao efetuar login!", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={NubankLogo} style={styles.logo} resizeMode="contain" />
      <FormularioLogin onLogin={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8A05BE", // Nubank purple color
    height: "100%",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
});

export default LoginScreen;
