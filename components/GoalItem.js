import { View, Text, StyleSheet, Pressable } from "react-native";
const GoalItem = ({ text, deleteGoal, id }) => {
  const deleteGoalHandler = () => {
    deleteGoal(id);
  };

  return (
    <Pressable onPress={deleteGoalHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});

export default GoalItem;
