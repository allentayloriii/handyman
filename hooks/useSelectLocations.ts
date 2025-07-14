import { Location } from "@/types/interfaces";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useEffect, useState } from "react";


export default function useSelectLocations() {
  const db = useSQLiteContext();
  const [locations, setLocations] = useState<Location[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchLocations = useCallback(async () => {
    try {
      setLoading(true)
      const dbLocations = await db.getAllAsync<Location>("SELECT * FROM locations");
      setLocations(dbLocations);
    } catch (error) {
      setError(`Error while trying to retrieve locations: ${error as Error}`);
    } finally {
      setLoading(false);
    }
  }, [db])

  useEffect(() => {
    fetchLocations();
  }, [fetchLocations]);

  return { locations, error, loading, fetchLocations };
}