import { Drawer } from "expo-router/drawer";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Layout = () => {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerInactiveTintColor: "orange",
          headerTintColor: "black",
        }}
      >
        <Drawer.Screen name="index" options={{ title: "Manage Locations" }} />
        <Drawer.Screen name="location" options={{ title: "Location" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {},
});
