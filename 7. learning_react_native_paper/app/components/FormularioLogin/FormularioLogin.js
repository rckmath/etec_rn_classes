import { useState } from "react";
import { View } from "react-native";

import { useTheme, Button, TextInput } from "react-native-paper";

import styles from "./FormularioLogin.styles";

const maskCPF = (value = "") => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    .slice(0, 14);
};

const FormularioLogin = ({ onLogin }) => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <TextInput
        label="CPF"
        style={[styles.input]}
        onChangeText={(text) => setCpf(maskCPF(text))}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        left={<TextInput.Icon icon="pound" style={{ marginTop: 48, color: theme.colors.shadow }} disabled />}
      />

      <TextInput
        label="Senha"
        style={[styles.input]}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={!showPassword}
        right={
          <TextInput.Icon
            style={{ marginTop: 36 }}
            onPress={() => {
              setShowPassword((v) => !v);
            }}
            icon={showPassword ? "eye" : "eye-off"}
          />
        }
      />

      <Button
        mode="outlined"
        disabled={!cpf || !password}
        contentStyle={{ height: 50 }}
        style={{ borderWidth: 3, borderColor: theme.colors.primary }}
        labelStyle={{ color: theme.colors.primary, fontWeight: "bold", fontSize: 22 }}
        onPress={() => {
          onLogin({ cpf, password });
        }}
      >
        Entrar
      </Button>
    </View>
  );
};

export default FormularioLogin;
