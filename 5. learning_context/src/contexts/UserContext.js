import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [saldo, setSaldo] = useState(0);

  const [user, setUser] = useState({
    name: "",
    email: "",
    emprestimo: false,
  });

  const realizarEmprestimo = (valorEmprestimo) => {
    setUser({ ...user, emprestimo: true });
    setSaldo(saldo + valorEmprestimo);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        saldo,
        setSaldo,
        realizarEmprestimo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
