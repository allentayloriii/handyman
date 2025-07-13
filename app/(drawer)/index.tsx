import LocationForm from "@/components/LocationForm";
import LocationListItem from "@/components/LocationListItem";
import useAddLocation from "@/hooks/useAddLocation";
import useSelectLocations from "@/hooks/useSelectLocations";
import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Page = () => {
  const { locations, fetchLocations } = useSelectLocations();
  const addLocation = useAddLocation();

  const handleLocationSubmit = async (name: string) => {
    await addLocation(name);
    fetchLocations();
  };

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  return (
    <View style={styles.container}>
      <LocationForm onSubmit={handleLocationSubmit} />
      <FlatList
        style={styles.list}
        data={locations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <LocationListItem location={item} onDelete={fetchLocations} />
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
  list: {
    padding: 8,
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
