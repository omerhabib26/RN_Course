import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.cardContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 24,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 6, //android only property
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    padding: 16,
    backgroundColor: Colors.primary800,
    justifyContent: "center",
    alignItems: "center",
  },
});
