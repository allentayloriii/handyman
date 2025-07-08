import { COLORS } from "@/constants/colors";
import { useFetchFilms } from "@/hooks/useFetchFilms";
import { Film } from "@/types/interfaces"; // Assuming you have a Film type defined
import React from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.containerBackground,
  },
});

const Films = () => {
  const { films, refreshing, onRefresh } = useFetchFilms();

  const renderItem = ({ item }: { item: Film }) => (
    <Text style={{ color: "white" }}>{item.title}</Text>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={films}
        keyExtractor={(item) => item.episode_id.toString()}
        renderItem={renderItem}
        // RefreshControl is used to pull to refresh the list
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={refreshing}
            tintColor={COLORS.text}
          />
        }
        ListEmptyComponent={
          <Text style={{ color: "white", textAlign: "center", marginTop: 20 }}>
            No films available
          </Text>
        }
      />
    </View>
  );
};

export default Films;
