import { useSQLiteContext } from "expo-sqlite";
import { useCallback } from "react";

export default function useAddLocation() {
  const db = useSQLiteContext();

  return useCallback( async (name: string) => {
    try {
      await db.runAsync("INSERT INTO locations (name) VALUES (?)", [name]);
    } catch (error) {
      console.log(`Error while adding location ${name}: ${error}`)
    }
  }, [db])
}