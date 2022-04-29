import { View, Text, StyleSheet } from "react-native";

export const FlexboxDeep = () => {
  return (
    <View style={{ padding: 50 }}>
      <View style={{ ...styles.boxContainer, ...styles.redBox }}>
        <Text>1</Text>
      </View>
      <View style={{ ...styles.boxContainer, ...styles.greenBox }}>
        <Text>2</Text>
      </View>
      <View style={{ ...styles.boxContainer, ...styles.blueBox }}>
        <Text>2</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'yellow',
  },
  redBox: {
    backgroundColor: 'red',
  },
  greenBox: {
    backgroundColor: 'green',
  },
  blueBox: {
    backgroundColor: 'blue',
  }
})
