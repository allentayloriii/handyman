import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

const useAsyncStorage = <T>(key: string) => {
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to get data from AsyncStorage
  const getData = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue !== null) {
        setValue(JSON.parse(jsonValue) as T);
      }
    } catch (e) {
      setError(`Failed to fetch data from storage, ${e}`);
    }
  }, [key]);

  // Function to set data in AsyncStorage
  const setData = async (newValue: T) => {
    try {
      const jsonValue = JSON.stringify(newValue);
      await AsyncStorage.setItem(key, jsonValue);
      setValue(newValue);
    } catch (e) {
      setError(`Failed to save data to storage, ${e}`);
    }
  };

  // Function to remove data from AsyncStorage
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem(key);
      setValue(null);
    } catch (e) {
      setError(`Failed to remove data from storage, ${e}`);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    getData();
  }, [getData]);

  return { value, setData, removeData, error };
};

export default useAsyncStorage;
