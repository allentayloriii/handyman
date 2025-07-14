import { Task } from "@/types/interfaces";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TaskListItemProps = {
  task: Task;
};

const TaskListItem = ({ task }: TaskListItemProps) => {
  return (
    <Link
      href={`/location/${task.locationId}/new-task?taskId=${task.id}`}
      asChild
    >
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Text style={{ fontSize: 30 }}>{task.isUrgent ? "⚠︎" : "○"}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.description}>{task.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default TaskListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    padding: 16,
    gap: 8,
  },
  iconContainer: {
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    color: "#666",
    fontSize: 14,
  },
});
