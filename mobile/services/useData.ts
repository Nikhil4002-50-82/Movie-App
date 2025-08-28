import { useEffect, useState } from "react";
import axios from "axios";

const useData = <T>(url: string, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<T>(url);
      setData(response.data);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      getData();
    }
  });

  return { data, loading, error, refetch: getData };
};

export default useData;
