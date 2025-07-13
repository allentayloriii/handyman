import useAddTask from "@/hooks/useAddTask";
import useDeleteTaskById from "@/hooks/useDeleteTaskById";
import useSelectTaskById from "@/hooks/useSelectTaskById";
import useUpdateTask from "@/hooks/useUpdateTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Page = () => {
  const { id: locationId, taskId } = useLocalSearchParams();
  const { task } = useSelectTaskById(taskId);
  const { updateTask } = useUpdateTask();
  const { addTask, lastInsertRowId } = useAddTask();
  const { deleteTask } = useDeleteTaskById();

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [imageUri, setImageUri] = useState<string | null>("");

  const loadTaskData = useCallback(async () => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setIsUrgent(task.isUrgent);
      setImageUri(task.imageUri);
    }
  }, [task]);

  const handleSaveTask = async () => {
    let newTaskId = Number(taskId);

    if (taskId) {
      // Update existing task
      await updateTask({
        title,
        description,
        isUrgent,
        imageUri,
        taskId,
      });
    } else {
      // Create new task
      await addTask({
        locationId: Number(locationId),
        title,
        description,
        isUrgent,
        imageUri,
      });
      if (lastInsertRowId) {
        newTaskId = lastInsertRowId;
      }
    }

    if (isUrgent) {
      // Handle urgent task
    }
    router.back();
  };

  const handleFinishTask = async () => {
    Alert.alert(
      "Finish Task",
      "Are you sure you want to finish this task? It will be removed from the database.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Finish",
          onPress: async () => {
            if (taskId) {
              await deleteTask(taskId);
              router.back();
            }
          },
        },
      ]
    );
  };

  useEffect(() => {
    if (taskId) {
      loadTaskData();
    }
  }, [loadTaskData, taskId]);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <View style={styles.row}>
        <Text>Urgent</Text>
        <Switch
          value={isUrgent}
          onValueChange={setIsUrgent}
          trackColor={{ false: "grey", true: "#F2A310" }}
        />
      </View>
      <TouchableOpacity onPress={handleSaveTask} style={styles.button}>
        <Text style={styles.buttonText}>
          {task ? "Update Task" : "Create Task"}
        </Text>
      </TouchableOpacity>
      {taskId && (
        <TouchableOpacity
          onPress={handleFinishTask}
          style={[styles.button, styles.finishButton]}
        >
          <Text style={styles.buttonText}>Finish Task</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#F2A310",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  finishButton: {
    backgroundColor: "#28a745",
  },
});
