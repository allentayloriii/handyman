import useAddTask from "@/hooks/useAddTask";
import useDeleteTaskById from "@/hooks/useDeleteTaskById";
import useSelectTaskById from "@/hooks/useSelectTaskById";
import useUpdateTask from "@/hooks/useUpdateTask";
import * as ImagePicker from "expo-image-picker";
import * as Notifications from "expo-notifications";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

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
      setIsUrgent(Boolean(task.isUrgent));
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
      await scheduleNotification(newTaskId, title);
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

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets?.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  const scheduleNotification = async (taskId: number, title: string) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Urgent Task Reminder: ${title}`,
        body: "Don't forget to check your task!",
        data: { taskId, locationId },
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 2,
      },
    });
  };

  useEffect(() => {
    if (taskId) {
      loadTaskData();
    }

    Notifications.requestPermissionsAsync();
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
      <TouchableOpacity
        onPress={pickImage}
        style={[styles.button, styles.imageButton]}
      >
        <Text style={styles.buttonText}>
          {imageUri ? "Change Image" : "Add an Image"}
        </Text>
      </TouchableOpacity>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : null}
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
  imageButton: {
    backgroundColor: "#007bff",
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
});
