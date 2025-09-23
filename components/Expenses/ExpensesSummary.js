import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummary({ expenses, periodName }) {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 7 days</Text>
      <Text style={styles.amount}>${expenseSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 4,
    marginVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  amount: {
    fontSize: 16,
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
