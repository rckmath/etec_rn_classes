import { useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from "./FormularioLogin.styles";
import NubankButton from "../NubankButton";

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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={text => setCpf(maskCPF(text))}
        keyboardType="numeric"
        maxLength={14}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.passwordInputWrapper}>
        <TextInput
          style={[styles.input, styles.passwordInput]}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(v => !v)}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Feather name={showPassword ? "eye" : "eye-off"} size={24} color="#8A05BE" />
        </TouchableOpacity>
      </View>
      <NubankButton
        title="Entrar"
        color="secondary"
        onPress={e => {
          e.preventDefault();
          onLogin({ cpf, password });
        }}
      />
    </View>
  );
};

export default FormularioLogin;
