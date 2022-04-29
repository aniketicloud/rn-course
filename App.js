import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { FlexboxDeep } from './FlexboxDeep';

export default function App() {
  return (
    // <View style={styles.appContainer}>
    //   <View style={styles.inputContainer}>
    //     <TextInput placeholder='Type Your goal' style={styles.textInput} />
    //     <Button title='Add Goal' />
    //   </View>
    //   <View>
    //     <Text>
    //       List of Goals . . Coming Soon . . .!
    //     </Text>
    //   </View>
    // </View>
      <FlexboxDeep />
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // paddingTop: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});