// Exercício de React Native: Gerenciando estados complexos e interações em uma TodoList

// Modifique o componente TodoList abaixo para que:
// [OK] 1. Cada todo seja um objeto com as propriedades: { id (único), texto, concluido (boolean) }.
// 2. Tenha um botão ao lado de cada item da lista para marcá-lo como concluído.
// 3. Tenha um botão para remover cada item individualmente da lista.
// 4. Mostre visualmente quais itens estão concluídos (por exemplo, com texto riscado ou cor diferente).
// 5. Exiba uma mensagem especial quando não houver nenhum todo na lista ('Nenhuma tarefa cadastrada!').
// (Bônus) 6. Faça os botões ficarem na frente do nome da tarefa

import React, { useState } from "react";
import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";

import MeuInput from "./src/components/MeuInput";
import TodoItem from "./src/components/TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Altere essa função para adicionar um objeto todo
  const addTodo = () => {
    const obj = {
      id: todos.length + 1,
      texto: newTodo,
      concluido: false,
    };

    setTodos([...todos, obj]);
    setNewTodo("");
  };

  const concluir = (id) => {
    const todoQueEuQueroConcluir = todos.find((tarefa, i) => tarefa.id === id);
    todoQueEuQueroConcluir.concluido = !todoQueEuQueroConcluir.concluido;
    setTodos([...todos]);
  };

  const remover = (id) => {
    const listaFiltrada = todos.filter((tarefa, i) => tarefa.id !== id);
    setTodos(listaFiltrada);
  };

  return (
    <SafeAreaView>
      <MeuInput placeholderText="Insira um novo todo" setValorInput={setNewTodo} valorInput={newTodo} />

      <Button title="Adicionar" onPress={addTodo} />

      {todos.length > 0 ? (
        todos.map((todo, index) => {
          return <TodoItem todo={todo} key={index} concluir={concluir} remover={remover}></TodoItem>;
        })
      ) : (
        <Text>Nenhuma tarefa cadastrada!</Text>
      )}
    </SafeAreaView>
  );
};

export default TodoList;
