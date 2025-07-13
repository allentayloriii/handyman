import useSelectLocationById from "@/hooks/useSelectLocationById";
import useSelectTasksByLocationId from "@/hooks/useSelectTasksByLocationId";
import { Stack, useFocusEffect, useLocalSearchParams } from "expo-router";
import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

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
