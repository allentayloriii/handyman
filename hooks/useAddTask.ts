import { Task } from "@/types/interfaces";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useState } from "react";

export default function useAddTask() {
  const db = useSQLiteContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [lastInsertRowId, setLastInsertRowId] = useState<number | null>(null)

  return useCallback(
    async ({ locationId, title, description, isUrgent, imageUri }: Omit<Task, "id">) => {
      try {
        setLoading(true);
        const result = await db.runAsync(
          "INSERT INTO tasks (locationId, title, description, isUrgent, imageUri) VALUES (?, ?, ? , ? ,?)",
          [Number(locationId), title, description, isUrgent ? 1 : 0, imageUri]
        );
        setLastInsertRowId(result.lastInsertRowId)
      } catch (error) {
        const errMsg = `Error while adding new task: ${error}`;
        console.log(errMsg);
        setError(new Error(errMsg));
      } finally {
        setLoading(false);
      }

      return { loading, error, lastInsertRowId };
    },
    [db, error, lastInsertRowId, loading]
  );
}
