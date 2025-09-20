import { StyleSheet, Text, View } from "react-native";

function List({ list }) {
  return list.map((item) => (
    <View key={item} style={style.itemContainer}>
      <Text style={style.itemText}>{item}</Text>
    </View>
  ));
}

export default List;

const style = StyleSheet.create({
  itemContainer: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },

  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
