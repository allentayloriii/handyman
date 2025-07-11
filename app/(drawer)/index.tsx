import LocationForm from "@/components/LocationForm";
import { Location } from "@/types/interfaces";
import { useSQLiteContext } from "expo-sqlite";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

const Page = () => {
  const db = useSQLiteContext();
  const [locations, setLocations] = useState<Location[]>([]);

  const loadLocations = useCallback(async () => {
    const dbLocations = await db.getAllAsync("SELECT * FROM locations");
    setLocations(dbLocations as Location[]);
    console.log(`Locations: ${JSON.stringify(dbLocations)}`);
  }, [db]);

  const addLocation = useCallback(
    async (name: string) => {
      await db.runAsync("INSERT INTO locations (name) VALUES (?)", name);
      loadLocations();
    },
    [db, loadLocations]
  );

  useEffect(() => {
    loadLocations();
  }, [loadLocations]);

  return (
    <View style={styles.container}>
      <LocationForm onSubmit={addLocation} />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
