import { StyleSheet, Text, View } from "react-native";

function Subtitle({ subTitle }) {
  return (
    <View style={style.subTitleContainer}>
      <Text style={style.subTitle}>{subTitle}</Text>
    </View>
  );
}

export default Subtitle;

const style = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 16,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },

  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    padding: 6,
    textAlign: "center",
  },
});
