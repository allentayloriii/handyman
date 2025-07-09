import { useState, useEffect } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if(!response.ok) {
          throw new Error(`Network Error: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch(err) {
        setError(err as string)
      }
      finally{
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;