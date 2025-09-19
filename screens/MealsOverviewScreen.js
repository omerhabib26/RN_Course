import { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProp = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    function pressHandler() {
      navigation.navigate("MealDetail", {
        title: item.title,
        mealId: item.id,
      });
    }

    return <MealItem mealItem={mealItemProp} onPress={pressHandler} />;
  }

  return (
    <View style={styles.rootScreen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    padding: 16,
  },
});
