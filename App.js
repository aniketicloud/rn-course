import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    // ? below is not a good practice to change state,
    // ? as new state depends on previous state
    // setCourseGoals([...courseGoals, enteredGoalText])
    setCourseGoals((currentCourseGoal) => {
      return enteredGoalText !== ""
        ? [
            ...currentCourseGoal,
            {
              text: enteredGoalText,
              id: Math.random().toString(),
            },
          ]
        : currentCourseGoal;
    });
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  };

  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  };
  const endAddGoalHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />

      <GoalInput
        onAddGoal={addGoalHandler}
        visible={isModalVisible}
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteGoal={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(itemData, index) => itemData.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
