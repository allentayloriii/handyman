import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import { Drawer } from "expo-router/drawer";
import * as SQLite from "expo-sqlite";
import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const db = SQLite.openDatabaseSync("reports.db");

const Layout = () => {
  useDrizzleStudio(db);
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
