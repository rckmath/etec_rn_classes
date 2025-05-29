import api from "../_api";

export const getPokemons = async ({ offset = 0, limit = 20 }) => {
  try {
    const res = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export const getPokemonByNameOrId = async (nameOrId) => {
  try {
    const res = await api.get(`/pokemon/${nameOrId}`);
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
