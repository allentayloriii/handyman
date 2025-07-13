import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerLeft: () => (
            <View style={{ marginLeft: -16 }}>
              <DrawerToggleButton tintColor="black" />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="[id]/new-task"
        options={{
          title: "New Task",
          headerBackTitle: "Back",
          headerTintColor: "black",
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {},
});
