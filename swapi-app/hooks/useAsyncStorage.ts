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

  const mergeItem = async (newvalue: T) => {
  try {
    await AsyncStorage.mergeItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error merging item:', error);
  }
};

const clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing AsyncStorage:', error);
  }
};

const getAllKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (error) {
    console.error('Error getting all keys:', error);
    return [];
  }
};

const getAllItems = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);
    return items.reduce((accumulator: Record<string, T>, [key, value]) => {
      accumulator[key] = JSON.parse(value as string);
      return accumulator;
    }, {} as { [key: string]: any });
  } catch (error) {
    console.error('Error getting all items:', error);
    return {};
  }
};

  // Fetch data when the component mounts
  useEffect(() => {
    getData();
  }, [getData]);

  return { value, setData, removeData, error, mergeItem, getAllItems, getAllKeys, clear };
};

export default useAsyncStorage;
