import { View, Text, StyleSheet } from "react-native";

export const FlexboxDeep = () => {
  return (
    <View style={styles.FlexBoxes}>
      <View style={{ ...styles.boxContainer, ...styles.redBox }}>
        <Text style={{ color: "white" }}>1</Text>
      </View>
      <View style={{ ...styles.boxContainer, ...styles.greenBox }}>
        <Text style={{ color: "white" }}>2</Text>
      </View>
      <View style={{ ...styles.boxContainer, ...styles.blueBox }}>
        <Text style={{ color: "white" }}>3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  FlexBoxes: {
    backgroundColor: "yellow",
    padding: 50,
    // margin: "20%",
    flexDirection: "row",
    width: "80%",
    height: 300,
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  boxContainer: {
    // width: 100,
    // height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  redBox: {
    flex: 1,
    backgroundColor: 'red',
  },
  greenBox: {
    flex: 1,
    backgroundColor: 'green',
  },
  blueBox: {
    flex: 2,
    backgroundColor: 'blue',
  }
})
