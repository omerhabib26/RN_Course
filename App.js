import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            title: "Welcome!",
            drawerLabel: "Welcome Drawer",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            title: "User!",
            drawerLabel: "User Drawer",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
