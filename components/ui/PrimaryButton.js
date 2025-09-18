import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  function pressHandler() {
    console.log("Pressed!!!");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.buttonInnerContainer,
          pressed && styles.pressedButton, // for iOS feedback
        ]}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    minWidth: 100,
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  pressedButton: {
    opacity: 0.75, // ✅ fallback effect for iOS
  },
});
