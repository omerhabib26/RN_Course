import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getISOFormattedDate } from "../../util/date";
import Button from "../UI/Button";
import InputField from "./InputField";

function ExpenseForm({ defaultData, submitButtonLabel, onCancel, onSubmit }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultData ? defaultData.amount.toString() : "",
      isValid: true,
    },
    description: {
      value: defaultData ? defaultData.description : "",
      isValid: true,
    },
    date: {
      value: defaultData ? getISOFormattedDate(defaultData.date) : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      //   Alert.alert("Invalid Input", "Please check your input values");
      setInputs((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense Detail</Text>
      <View style={styles.inputRow}>
        <InputField
          style={styles.inputRowItem}
          label="Amount"
          isInvalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
        />
        <InputField
          style={styles.inputRowItem}
          label="Date"
          isInvalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLenght: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
        />
      </View>

      <InputField
        label="Description"
        isInvalid={!inputs.description.isValid}
        textInputConfig={{
          keyboardType: "default",
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
      />

      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid Input values - Please check your entered data
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          mode="flat"
          onPress={onCancel}
          children="Cancel"
        />
        <Button
          style={styles.button}
          onPress={submitHandler}
          children={submitButtonLabel}
        />
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyles.colors.white,
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputRowItem: {
    flex: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },

  errorText: {
    color: GlobalStyles.colors.error500,
    textAlign: "center",
    margin: 8,
  },
});
