import LocationForm from "@/components/LocationForm";
import LocationListItem from "@/components/LocationListItem";
import { Location } from "@/types/interfaces";
import { useSQLiteContext } from "expo-sqlite";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

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
      <FlatList
        data={locations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <LocationListItem location={item} onDelete={loadLocations} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No locations found</Text>
        )}
      />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyText: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    color: "#999",
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
