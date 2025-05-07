// Exercício de React Native: Gerenciando estados complexos e interações em uma TodoList

// Modifique o componente TodoList abaixo para que:
// 1. Cada todo seja um objeto com as propriedades: { id (único), texto, concluido (boolean) }.
// 2. Tenha um botão ao lado de cada item da lista para marcá-lo como concluído.
// 3. Tenha um botão para remover cada item individualmente da lista.
// 4. Mostre visualmente quais itens estão concluídos (por exemplo, com texto riscado ou cor diferente).
// 5. Exiba uma mensagem especial quando não houver nenhum todo na lista ('Nenhuma tarefa cadastrada!').
// (Bônus) 6. Faça os botões ficarem na frente do nome da tarefa

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Altere essa função para adicionar um objeto todo
  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  // Crie aqui as funções para marcar como concluído e remover todo

  return (
    <View>
      <TextInput
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="Novo Todo"
      />
      <Button title="Adicionar" onPress={addTodo} />
      {/* Exiba aqui a mensagem especial quando não houver tarefas */}
      {todos.map((todo, index) => (
        <View key={index}>
          {/* Exiba o todo com estilo condicional se concluído */}
          <Text>{todo}</Text>
          {/* Adicione aqui os botões para marcar como concluído e remover */}
        </View>
      ))}
    </View>
  );
  );
};

export default TodoList;

