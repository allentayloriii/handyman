import Logo from "@/assets/images/logo.png";
import { Location } from "@/types/interfaces";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import * as SQLite from "expo-sqlite";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// const db = SQLite.openDatabaseSync("reports.db");

const CustomDrawerContent = (props: any) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const db = SQLite.useSQLiteContext();
  const drawerStatus = useDrawerStatus();
  const pathName = usePathname();
  const { bottom } = useSafeAreaInsets();

  const isDrawerOpen = useMemo(() => drawerStatus === "open", [drawerStatus]);

  const LOGO_IMAGE = Image.resolveAssetSource(Logo).uri;

  const loadLocations = useCallback(async () => {
    const dbLocations = await db.getAllAsync("SELECT * FROM locations");
    setLocations(dbLocations as Location[]);
    console.log(`Locations: ${JSON.stringify(dbLocations)}`);
  }, [db]);

  useEffect(() => {
    if (isDrawerOpen) {
      loadLocations();
    }
  }, [isDrawerOpen, loadLocations]);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <Image src={LOGO_IMAGE} style={styles.logo} />
        <View style={styles.locationsContainer}>
          <DrawerItemList {...props} />
          <Text style={styles.title}>Locations</Text>
          {locations.map((location) => {
            const isActive = pathName === `/location/${location.id}`;
            return (
              <DrawerItem
                key={location.id}
                label={location.name}
                onPress={() => router.push(`/location/${location.id}`)}
                focused={isActive}
                activeTintColor="orange"
                inactiveTintColor="black"
              />
            );
          })}
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          paddingBottom: bottom,
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#ccc",
          padding: 10,
        }}
      >
        <Text>Copyright Ojo Rojo Studios 2025</Text>
      </View>
    </View>
  );
};

const Layout = () => {
  // useDrizzleStudio(db);
  return (
    <GestureHandlerRootView>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerHideStatusBarOnOpen: true,
          drawerActiveTintColor: "orange",
          headerTintColor: "black",
        }}
      >
        <Drawer.Screen name="index" options={{ title: "Manage Locations" }} />
        <Drawer.Screen
          name="location"
          options={{
            title: "Location",
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {},
  logo: { width: 100, height: 100, margin: 10, alignSelf: "center" },
  locationsContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 16,
    paddingTop: 24,
    color: "#a6a6a6",
  },
});
