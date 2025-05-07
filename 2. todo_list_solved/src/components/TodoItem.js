import { Text, View, Button, StyleSheet } from "react-native";

const TodoItem = ({ todo, concluir, remover }) => {
  return (
    <View style={styles.todoView}>
      <Text style={{ color: todo.concluido ? "red" : "black" }}>{todo.texto}</Text>
      <Button
        color="green"
        style={styles.button}
        title="->"
        onPress={() => {
          concluir(todo.id);
        }}
      ></Button>
      <Button
        color="red"
        style={styles.button}
        title="X"
        onPress={() => {
          remover(todo.id);
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  todoView: {
    flexDirection: "row",
  },
  button: {
    width: 30,
    height: 30,
  },
});

export default TodoItem;
