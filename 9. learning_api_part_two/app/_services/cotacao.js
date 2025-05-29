import api from "../_api";

export const getCotacao = async ({ crypto = "bitcoin", currency = "brl" }) => {
  const query = `?ids=${crypto}&vs_currencies=${currency}`;
  return api.get(query);
};
