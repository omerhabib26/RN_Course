import { CommonActions } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/meal_detail/List";
import Subtitle from "../components/meal_detail/Subtitle";
import MealDetail from "../components/MealDetail";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  function handleButtonPressHandler() {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "MealsCategories" }],
      })
    );
    console.log("Manu Button Pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.title,
      headerRight: () => {
        return (
          <IconButton
            icon={"home"}
            color={"white"}
            onPress={handleButtonPressHandler}
          />
        );
      },
    });
  }, [navigation]);

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <View style={style.rootContainer}>
        <Image style={style.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={style.title}>{selectedMeal.title}</Text>
        <View>
          <MealDetail
            mealItem={{
              duration: selectedMeal.duration,
              complexity: selectedMeal.complexity,
              affordability: selectedMeal.affordability,
            }}
            textStyle={style.detailText}
          />
          <View style={style.listContainer}>
            <Subtitle subTitle={"Ingredients"} />
            <List list={selectedMeal.ingredients} />
            <Subtitle subTitle={"Steps"} />
            <List list={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const style = StyleSheet.create({
  rootContainer: {
    paddingBottom: 16,
  },

  image: {
    width: "100%",
    height: 350,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
    alignSelf: "center",
  },
});
