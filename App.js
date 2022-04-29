import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Type Your goal' style={styles.textInput} />
        <Button title='Add Goal' />
      </View>

      <View style={styles.goalsContainer} >
        <Text>
          List of Goals . . Coming Soon . . .!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // !! Delete this
    backgroundColor: 'grey',

    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    // !! Delete this
    backgroundColor: 'white',

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    // !! Delete this
    backgroundColor: 'aqua',
    marginBottom: 24,

    flex: 5,
  }
});
