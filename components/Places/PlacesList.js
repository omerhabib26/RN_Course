import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/styles";
import PlaceItem from "./PlaceItem";

function PlacesList({ places }) {
  if (!places || places.lenght === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          {" "}
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      keyExtractor={(place) => place.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  fallbackText: {
    fontSize: 18,
    color: Colors.primary200,
  },
});
