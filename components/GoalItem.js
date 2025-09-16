import { Text, View, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  function deleteGoalHandler() {
    props.deleteItem(props.data.id);
  }
  return (
    <View style={styles.itemList}>
      <Pressable
        android_ripple={{ color: "#fff000" }}
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
        // 👈 ripple applies to this background
      >
        <Text style={styles.itemListText}>{props.data.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  itemList: {
    fontSize: 16,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  pressedItem: {
    opacity: 0.5,
  },

  itemListText: {
    color: "white",
    padding: 8,
  },
});
