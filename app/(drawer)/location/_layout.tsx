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
            <View style={{ marginLeft: -30 }}>
              <DrawerToggleButton tintColor="black" />
            </View>
          ),
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {},
});
