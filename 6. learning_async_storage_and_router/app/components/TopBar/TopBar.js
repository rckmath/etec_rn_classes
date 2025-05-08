import React from "react";
import { View, ImageBackground } from "react-native";
import NubankLogo from "../../../assets/icon.png";
import styles from "./TopBar.styles";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={NubankLogo} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

export default TopBar;
