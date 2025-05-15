import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_INFO_KEY = "logged_user";

/**
 * Salva as informações do usuário logado no AsyncStorage.
 *
 * @param {Object} options - Opções para salvar as informações do usuário.
 * @param {Object} options.value - Objeto contendo as informações do usuário a serem salvas.
 * @returns {Promise<void>} Uma promessa que resolve quando as informações são salvas com sucesso.
 * @throws {Error} Lança um erro se ocorrer algum problema ao salvar as informações.
 */
const saveLoggedUserInfo = async ({ value }) => {
  try {
    await AsyncStorage.setItem(USER_INFO_KEY, JSON.stringify(value));
  } catch (e) {
    throw new Error("Error ao salvar informações do usuário");
  }
};

const getUserInfo = async () => {
  try {
    const value = await AsyncStorage.getItem(USER_INFO_KEY);
    return value !== null ? JSON.parse(value) : null;
  } catch (e) {
    throw new Error("Error ao buscar informações do usuário");
  }
};

const destroyUserInfo = async () => {
  try {
    await AsyncStorage.removeItem(USER_INFO_KEY);
  } catch (e) {
    throw new Error("Error ao apagar dados de usuário");
  }
};

export { saveLoggedUserInfo, getUserInfo, destroyUserInfo };
