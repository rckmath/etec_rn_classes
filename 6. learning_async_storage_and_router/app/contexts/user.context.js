import React, { createContext, useState } from "react";

export const usuariosCadastrados = [
  {
    cpf: "12345678901",
    name: "Erick",
    password: "123456",
    saldo: 120,
  },
  {
    cpf: "12345678902",
    name: "Lucas",
    password: "456789",
    saldo: 2560,
  },
  {
    cpf: "12345678903",
    name: "Joao",
    password: "789123",
    saldo: 2500000,
  },
];

export const UserContext = createContext({
  user: {
    name: "",
    email: "",
    emprestimo: false,
  },
  saldo: 0,
  realizarLogin: (cpf, password) => {},
  realizarEmprestimo: () => {},
});

const UserProvider = ({ children }) => {
  const [saldo, setSaldo] = useState(0);

  const [user, setUser] = useState({
    name: "",
    email: "",
    emprestimo: false,
  });

  const realizarLogin = (cpf, password) => {
    if (!cpf || !password) {
      throw new Error("CPF e senha são obrigatórios");
    }

    const user = usuariosCadastrados.find((user) => user.cpf === cpf && user.password === password);

    if (user) {
      const saldoEmReais = user.saldo ? user.saldo / 1000 : 0;
      setUser(user);
      setSaldo(saldoEmReais);
    } else {
      throw new Error("Credenciais inválidas");
    }
  };

  const realizarEmprestimo = (valorEmprestimo) => {
    setUser({ ...user, emprestimo: true });
    setSaldo(saldo + valorEmprestimo);
  };

  return <UserContext.Provider value={{ user, saldo, realizarLogin, realizarEmprestimo }}>{children}</UserContext.Provider>;
};

export default UserProvider;
