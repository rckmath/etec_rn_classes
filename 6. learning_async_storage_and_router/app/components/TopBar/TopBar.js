import React, { useContext } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";

import { UserContext } from "../../contexts/user.context";

import NubankLogo from "../../../assets/icon.png";
import styles from "./TopBar.styles";

const TopBar = () => {
  const { user, realizarLogout } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={NubankLogo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.spacer} />
      {user?.name && (
        <TouchableOpacity style={styles.exitButton} onPress={realizarLogout} activeOpacity={0.7}>
          <Text style={styles.exitButtonText}>Sair</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TopBar;
