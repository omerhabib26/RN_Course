import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items }) {
  function renderMealItem(items) {
    const item = items.item;
    const mealItemProp = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem mealItem={mealItemProp} />;
  }
  return (
    <View style={styles.rootScreen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 16,
  },
});
