import { useNavigation } from "@react-navigation/native";
import IconButton from "./IconButton";

function AddExpenseHeaderButton({ icon, size, color, onPress }) {
  const navigation = useNavigation();

  function addExpenseHandler() {
    navigation.navigate("ManageExpense");
  }

  return (
    <IconButton
      icon={icon}
      size={size}
      color={color}
      onPress={addExpenseHandler}
    />
  );
}

export default AddExpenseHeaderButton;
