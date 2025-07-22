import { Task } from "@/types/interfaces";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useEffect, useState } from "react";

export default function useSelectTaskById(id: unknown) {
  const db = useSQLiteContext();
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchTask = useCallback(async () => {
    try {
      setLoading(true);
      const dbTask = await db.getFirstAsync<Task>(
        "SELECT * FROM tasks WHERE id = ?",
        [Number(id)]
      );
      setTask(dbTask);
    } catch (error) {
      const errMsg = `Error while retrieving task with id ${id}: ${error}`;
      console.log(`Error while retrieving task with id ${id}: ${error}`);
      setError(new Error(errMsg));
    } finally {
      setLoading(false);
    }
  }, [db, id]);

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  return { loading, error, task, fetchTask };
}
