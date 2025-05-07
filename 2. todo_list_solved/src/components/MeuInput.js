import React from "react";
import { TextInput } from "react-native";

const MeuInput = ({ placeholderText, setValorInput, valorInput }) => {
  return (
    <TextInput
      value={valorInput}
      onChangeText={setValorInput}
      style={{
        borderWidth: 1,
        borderColor: "grey",
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
      }}
      placeholder={placeholderText}
    />
  );
};

export default MeuInput;
