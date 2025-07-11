import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Page = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Location Details for {id}</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {},
});
