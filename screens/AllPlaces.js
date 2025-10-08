import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import PlacesList from "../components/Places/PlacesList";
import { Colors } from "../constants/styles";
import { fetchPlaces } from "../util/database";

function AllPlaces({ route }) {
  const [dbInitialized, setDbInitialized] = useState(false);
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function getPlaces() {
      try {
        const result = await fetchPlaces();
        setPlaces(result);
        setDbInitialized(true);
      } catch (err) {
        console.log(err);
      }
    }
    getPlaces();
  }, []);

  //   if (!dbInitialized) {
  //     return (
  //       <View style={styles.loadingContainer}>
  //         <ActivityIndicator size="large" color={Colors.primary500} />
  //       </View>
  //     );
  //   }

  return <PlacesList places={places} />;
}

export default AllPlaces;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gray700,
  },
});
