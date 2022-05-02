import { View, Text, Button } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import styles from "../style";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello World!</Text>
      <Button
        title="Go to InvoiceEdit"
        onPress={() => navigation.navigate("InvoiceEdit")}
      />
      <Button
        title="Go to Summary"
        onPress={() => navigation.navigate("Summary")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
