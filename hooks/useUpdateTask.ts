import { Task } from "@/types/interfaces";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useState } from "react";

export default function useUpdateTask() {
  const db = useSQLiteContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  type UpdateTaskProps = Omit<Task, "id" | "locationId"> & { taskId: unknown };

  const updateTask =  useCallback(
    async ({
      title,
      description,
      isUrgent,
      imageUri,
      taskId,
    }: UpdateTaskProps) => {
      try {
        setLoading(true);
        await db.runAsync(
          "UPDATE tasks SET title = ?, description = ?, isUrgent = ?, imageUri = ? WHERE id = ?",
          [title, description, isUrgent ? 1 : 0, imageUri, Number(taskId)]
        );
      } catch (error) {
        const errMsg = `Error while adding new task: ${error}`;
        console.log(errMsg);
        setError(new Error(errMsg));
      } finally {
        setLoading(false);
      }
    },
    [db]
  );
  
  return { loading, error, updateTask };
}
