import React, { createContext, useState } from "react";

const UserContext = createContext({
  user: {
    name: "",
    email: "",
    emprestimo: false,
  },
  saldo: 0,
  setUser: () => {},
  setSaldo: () => {},
  realizarEmprestimo: () => {},
});

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
