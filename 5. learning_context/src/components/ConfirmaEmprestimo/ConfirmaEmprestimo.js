import { useContext } from "react";
import { Modal, View, Alert, Text } from "react-native";

import styles from "./ConfirmaEmprestimo.styles";

import NubankButton from "../NubankButton";
import { UserContext } from "../../contexts/UserContext";

const ConfirmaEmprestimo = ({ visible, onClose }) => {
  const { user, realizarEmprestimo } = useContext(UserContext);

  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.text}>{user.name ? `${user.name},` : "Prezado cliente"}, deseja confirmar o empréstimo?</Text>
        <View style={styles.buttonContainer}>
          <NubankButton
            title="Confirmar empréstimo"
            color="primary"
            onPress={() => {
              realizarEmprestimo(100000);
              Alert.alert("Empréstimo realizado com sucesso!");
              onClose();
            }}
            style={styles.button}
          />
          <NubankButton title="Cancelar" color="secondary" onPress={onClose} style={styles.button} />
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmaEmprestimo;
