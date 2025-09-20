import { FlatList } from "react-native";
import CategoryGridItem from "../components/CategoryGridItem";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  function rendorCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
        title: itemData.item.title,
      });
    }

    return (
      <CategoryGridItem
        title={itemData.item.title}
        bgColor={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      style={{ backgroundColor: "transparent" }}
      contentContainerStyle={{ backgroundColor: "transparent" }}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={rendorCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
