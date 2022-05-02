import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InvoiceEditScreen from "./components/InvoiceEditScreen";
import SummaryScreen from "./components/SummaryScreen";
import HomeScreen from "./components/HomeScreen";

const Stack = createStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="InvoiceEdit" component={InvoiceEditScreen} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}