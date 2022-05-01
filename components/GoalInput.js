import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ onAddGoal, visible }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type Your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button
          title="Add Goal"
          onPress={addGoalHandler}
          disabled={enteredGoalText === ""}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
