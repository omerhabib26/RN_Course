import { Dimensions, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  console.log("User Number: " + children);
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary600,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  numberText: {
    padding: 12,
    fontSize: 24,
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});
