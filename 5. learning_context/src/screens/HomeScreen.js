import { useContext } from "react";
import { SafeAreaView, View, Text, Button } from "react-native";
import styles from "./HomeScreen.styles";

import TopBar from "../components/TopBar";
import InfoDaConta from "../components/InfoDaConta";
import NubankButton from "../components/NubankButton";

import { UserContext } from "../contexts/UserContext";

const HomeScreen = () => {
  const { user, setUser, saldo, setSaldo } = useContext(UserContext);

  const handleLogin = () => {
    setUser({ name: "Erick" });
    setSaldo(-0.67);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={{ padding: 20, gap: 15 }}>
        {!user.name && (
          <NubankButton
            title="Efetuar login"
            onPress={handleLogin}
          />
        )}

        <View style={styles.cardContainer}>
          <Text style={styles.helloWorldTitle}>Olá, {user?.name || "usuário"}</Text>
          <View style={styles.saldoContainer}>
            <Text style={styles.saldoCurrency}>R$</Text>
            <Text style={styles.saldoDescription}>{saldo.toLocaleString("pt-BR")}</Text>
          </View>
        </View>
        <InfoDaConta saldo={saldo} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
