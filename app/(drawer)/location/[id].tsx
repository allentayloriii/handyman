import useSelectLocationById from "@/hooks/useSelectLocationById";
import { Task } from "@/types/interfaces";
import { Stack, useFocusEffect, useLocalSearchParams } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Page = () => {
  const { id } = useLocalSearchParams();
  const db = useSQLiteContext();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [locationName, setLocationName] = useState<string>("");

  const {
    locations: [location],
  } = useSelectLocationById(id);

  const loadLocationData = useCallback(async () => {
    if (location) {
      setLocationName(location.name);
    }

    // Load tasks for the location
    const locationTasks = await db.getAllAsync<Task>(
      "SELECT * FROM tasks WHERE locationId = ?",
      [Number(id)]
    );
    setTasks(locationTasks);
    console.log(`Tasks for location ${id}:`, JSON.stringify(locationTasks));
  }, [db, id, location]);

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
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {},
});
