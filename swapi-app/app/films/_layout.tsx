import { COLORS } from "@/constants/colors";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.background },
        headerTintColor: COLORS.text,
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "All Films" }} />
      <Stack.Screen name="[id]" options={{ title: "Film Details" }} />
    </Stack>
  );
};

export default Layout;
