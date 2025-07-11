import type { Location } from "@/types/interfaces";
import { Ionicons } from "@expo/vector-icons";
import { useSQLiteContext } from "expo-sqlite";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type LocationListItemProps = {
  location: Location;
  onDelete: () => void;
};

const LocationListItem = ({ location, onDelete }: LocationListItemProps) => {
  const db = useSQLiteContext();

  const handleDelete = async () => {
    await db.runAsync("DELETE FROM locations WHERE id = ?", location.id);
    onDelete();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{location.name}</Text>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default LocationListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 4,
    marginBottom: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "#333",
  },
  deleteButton: {
    padding: 8,
  },
});
