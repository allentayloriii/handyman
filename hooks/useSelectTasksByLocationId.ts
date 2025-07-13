import { Task } from "@/types/interfaces";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useEffect, useState } from "react";

export default function useSelectTasksByLocationId(id: unknown) {
  const db = useSQLiteContext();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTasksByLocationId = useCallback(async () => {
    try {
      setLoading(true)
      const dbTasks = await db.getAllAsync<Task>("SELECT * FROM tasks WHERE locationId = ?", [
      Number(id),
    ]);
    setTasks(dbTasks);
    } catch (error) {
      console.log(`Error while fetching tasks by id ${id}: ${error}`);
    } finally {
      setLoading(false);
    }
  }, [db, id]);

  useEffect(() => {
    fetchTasksByLocationId();
  }, [fetchTasksByLocationId]);

  return { tasks, loading, fetchTasksByLocationId }
}
