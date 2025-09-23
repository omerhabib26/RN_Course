import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressable}
    >
      <View style={styles.rootContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.date}>{getFormattedDate(date)}</Text>
        </View>
        <Text style={styles.amount}>${amount.toFixed(2)} </Text>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    justifyContent: "space-between",
    elevation: 8,
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-around",
    justifyContent: "space-around",
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: GlobalStyles.colors.primary50,
  },

  date: {
    color: GlobalStyles.colors.primary50,
  },

  amount: {
    backgroundColor: GlobalStyles.colors.white,
    textAlignVertical: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
    minWidth: "20%",
    textAlign: "center",
  },

  pressable: {
    opacity: 0.85,
  },
});
