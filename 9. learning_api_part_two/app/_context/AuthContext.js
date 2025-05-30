import { createContext, useEffect, useState } from "react";
import { getItem, setItem } from "../_storage";

const CODIGO_ACESSO = "54321";

export const AuthContext = createContext({
  autenticado: false,
  deslogar: async () => {},
  acessar: async (codigo) => {},
});

export const AuthProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const getAutenticado = async () => {
      const autenticadoLocal = Boolean(await getItem("AUTENTICADO"));
      setAutenticado(autenticadoLocal);
    };

    getAutenticado();
  }, []);

  const deslogar = async () => {
    setAutenticado(false);
    await setItem("AUTENTICADO", "false");
  };

  const acessar = async (codigo) => {
    if (codigo === CODIGO_ACESSO) {
      setAutenticado(true);
      await setItem("AUTENTICADO", "true");
      return;
    }

    setAutenticado(false);
  };

  return <AuthContext.Provider value={{ autenticado, acessar, deslogar }}>{children}</AuthContext.Provider>;
};
