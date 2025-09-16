import { View, TextInput, StyleSheet, Button, Modal, Text } from "react-native";
import { useState, useEffect } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [showError, setShowError] = useState(false);

  // 👇 Reset text & error each time modal becomes visible
  useEffect(() => {
    if (props.visible) {
      setEnteredGoalText("");
      setShowError(false);
    }
  }, [props.visible]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim().length === 0) {
      setShowError(true);
      return;
    }
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
    setShowError(false);
    dismissModal();
  }

  function dismissModal() {
    props.dismissModal();
  }

  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <View style={styles.modalWrapper}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Your course goal"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          {showError && (
            <Text style={styles.textError}>Enter a valid string</Text>
          )}
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={dismissModal} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)", // semi-transparent background
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: "100%", // modal width
    elevation: 5, // shadow on Android
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  textInput: {
    borderWidth: 1,
    marginVertical: 16,
    paddingHorizontal: 8,
    borderColor: "#cccccc",
    backgroundColor: "#fff",
    borderRadius: 6,
  },

  textError: {
    color: "red",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 16,
  },

  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
