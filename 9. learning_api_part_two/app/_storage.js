import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

export const getItem = async (key) => {
  return AsyncStorage.getItem(key);
};
