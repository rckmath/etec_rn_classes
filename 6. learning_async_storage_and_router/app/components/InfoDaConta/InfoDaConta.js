import { useContext, useState } from "react";
import { Text, View } from "react-native";

import ConfirmaEmprestimo from "../ConfirmaEmprestimo";
import NubankButton from "../NubankButton";

import { UserContext } from "../../contexts/user.context";
import styles from "./InfoDaConta.styles";

const InfoDaConta = ({ saldo }) => {
  const { user } = useContext(UserContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSolicitarEmprestimo = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const getTextoEmprestimo = () => {
    if (!user.name) {
      return "efetue login para ver suas opções de empréstimo.";
    }

    return user.emprestimo
      ? "você tem um empréstimo ativo."
      : "você tem 100 mil reais disponíveis para empréstimo. Clique no botão abaixo para solicitar.";
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.text}>
        {user?.name || "Prezado cliente"}, {getTextoEmprestimo()}
      </Text>
      {!user.emprestimo && <NubankButton title="Solicitar empréstimo" onPress={handleSolicitarEmprestimo} />}
      <ConfirmaEmprestimo visible={isModalVisible} onClose={handleCloseModal} />
    </View>
  );
};

export default InfoDaConta;
