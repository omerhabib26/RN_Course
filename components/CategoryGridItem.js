import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridItem({ title, bgColor, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressedButton,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: bgColor }]}>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 16,
    elevation: 4,
    height: 150,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow: "hidden",
  },

  button: {
    flex: 1,
  },
  pressedButton: {
    opacity: 0.75, // ✅ fallback effect for iOS
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
