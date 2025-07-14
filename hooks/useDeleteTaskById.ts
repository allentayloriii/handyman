import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useState } from "react";

export default function useDeleteTaskById() {
  const db = useSQLiteContext();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteTask = useCallback(
    async (id: unknown) => {
      try {
        setPending(true);
        await db.runAsync("DELETE FROM tasks WHERE id = ?", [Number(id)]);
      } catch (error) {
        const errMsg = `Error while trying to delete task with id ${id}: ${error}`;
        console.log(errMsg);
        setError(new Error(errMsg));
      } finally {
        setPending(false);
      }
    },
    [db]
  );

  return { pending, error, deleteTask };
}
