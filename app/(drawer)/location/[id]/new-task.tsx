import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Page = () => {
  const { id: locationId, taskId } = useLocalSearchParams();
  console.log("Location ID:", locationId, "Task ID:", taskId);
  return (
    <View style={styles.container}>
      <Text>New Task</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {},
});
