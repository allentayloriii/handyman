import { useCallback, useState } from "react";

const useFetchPosts = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Record<string,unknown>[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/posts')
      if (!response.ok) {
        throw new Error(`Network Error: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch(err: unknown) {
      setError(err as string);
    } finally {
      setLoading(false);
    }
  }, []);

  return {loading, data, error, fetchPosts}
}

export default useFetchPosts;