import TaskListItem from "@/components/TaskListItem";
import useSelectLocationById from "@/hooks/useSelectLocationById";
import useSelectTasksByLocationId from "@/hooks/useSelectTasksByLocationId";
import { Link, Stack, useFocusEffect, useLocalSearchParams } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Page = () => {
  const [locationName, setLocationName] = useState<string>("");

  const { id } = useLocalSearchParams();
  const {
    locations: [location],
  } = useSelectLocationById(id);
  const { tasks, fetchTasksByLocationId } = useSelectTasksByLocationId(id);

  const loadLocationData = useCallback(async () => {
    if (location) {
      setLocationName(location.name);
    }

    fetchTasksByLocationId();
  }, [fetchTasksByLocationId, location]);

  useFocusEffect(
    useCallback(() => {
      loadLocationData();
    }, [loadLocationData])
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: locationName || "Tasks" }} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskListItem task={item} />}
        ListEmptyComponent={<Text>No tasks found</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      <Link href={`/location/${id}/new-task`} asChild>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            // Navigate to new task creation screen
            // This could be a separate function or inline navigation logic
          }}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#F2A310",
    borderRadius: 28,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
