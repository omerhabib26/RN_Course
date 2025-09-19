import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

function IconButton({ icon, color, onPress }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && style.pressed}
      >
        <Ionicons name={icon} size={24} color={color} />
      </Pressable>
    </View>
  );
}

export default IconButton;

const style = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
