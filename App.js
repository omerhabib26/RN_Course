import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "./constants/styles";

import { SafeAreaView } from "react-native-safe-area-context";
import AddExpenseHeaderButton from "./components/UI/AddExpenseHeaderButton";
import AllExpenses from "./screens/AllExpenses";
import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import ExpenseContextProvider from "./store/context/expenses-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverView() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <AddExpenseHeaderButton
            icon="bag-add"
            size={24}
            color={GlobalStyles.colors.white}
          />
        ),
      }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          style="light"
          backgroundColor={GlobalStyles.colors.primary500}
        />
        <ExpenseContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: true,
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.primary500,
                },
                headerTintColor: GlobalStyles.colors.white,
              }}
            >
              <Stack.Screen
                name="ExpenseOverview"
                component={ExpensesOverView}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ManageExpense"
                component={ManageExpense}
                options={{
                  title: "Manage Expense",
                  animation: "slide_from_bottom",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ExpenseContextProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
