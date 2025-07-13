import { Location } from "@/types/interfaces";
import { useSQLiteContext } from "expo-sqlite";
import { useCallback, useEffect, useState } from "react";

export default function useSelectLocationById(id: unknown) {
  const db = useSQLiteContext();
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLocationsById = useCallback(async () => {
    try {
      setLoading(true);
      const dbLocation = await db.getAllAsync<Location>(
        "SELECT * FROM locations WHERE id = ?",
        [Number(id)]
      );
      setLocations(dbLocation);
    } catch (error) {
      console.log(`Error while pulling all locations by id ${id}: ${error}`)
    } finally { setLoading(false)}
  }, [db, id])

  useEffect(() => { fetchLocationsById();
  }, [fetchLocationsById]);

  return { locations, loading, fetchLocationsById }
}
