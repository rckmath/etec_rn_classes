import { useContext, useEffect } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import { router } from "expo-router";

import NubankLogo from "../assets/icon.png";

import FormularioLogin from "./components/FormularioLogin";
import { UserContext } from "./contexts/user.context";
import { getUserInfo } from "./storage/user.storage";

import { theme } from "./_layout";

const LoginScreen = () => {
  const { realizarLogin } = useContext(UserContext);

  const goToHome = () => {
    router.push("/home");
  };

  const checkUser = async () => {
    const user = await getUserInfo();

    if (user && user.cpf) {
      realizarLogin(user.cpf, user.password);
      goToHome();
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const handleLogin = ({ cpf, password }) => {
    try {
      cpf = cpf.replace(/\D/g, "");
      realizarLogin(cpf, password);
      goToHome();
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
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
});

export default LoginScreen;
