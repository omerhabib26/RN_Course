import { Platform, StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const isAndroid = Platform.OS === "android";

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: isAndroid ? 0 : 2,
    borderColor: Platform.select({ ios: "black", android: "yellow" }),
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
