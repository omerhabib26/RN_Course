import { FlatList, StyleSheet, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      style={style.listSpacing}
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={style.listSeparator} />}
      contentContainerStyle={{ paddingBottom: 40 }}
    />
  );
}

export default ExpensesList;

const style = StyleSheet.create({
  listSpacing: {
    paddingVertical: 4,
  },
  listSeparator: {
    height: 8,
  },
});
