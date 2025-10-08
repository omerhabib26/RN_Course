import PlaceForm from "../components/Places/PlaceForm";
import { insert } from "../util/database";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    try {
      console.log("ADD Place: " + place);
      const rowID = await insert(place);
      console.log("Row: " + rowID);
      navigation.navigate("AllPlaces", {
        place: place,
      });
    } catch (err) {
      console.log("❌ Insert failed:", err);
    }
  }

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
