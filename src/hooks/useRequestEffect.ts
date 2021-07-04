import { DependencyList, useEffect, useState } from "react";

export type RequestEndpoint<T> = () => Promise<T>;

export interface UseRequestState<T> {
  data?: T;
  isLoading: boolean;
  error: boolean;
}

export const useRequestEffect: <T>(
  endpoint: RequestEndpoint<T>,
  dependencies?: DependencyList
) => UseRequestState<T> = (endpoint, dependencies = []) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  const fetch = async () => {
    setLoading(true);
    try {
      const response = await endpoint();
      setData(response as any);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, [endpoint, ...dependencies]);

  return { isLoading, error, data };
};
