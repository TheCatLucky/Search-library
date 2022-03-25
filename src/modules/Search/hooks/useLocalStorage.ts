import { useState, useEffect } from 'react';

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  };
  const [value, setValue] = useState<T>(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}

export default useLocalStorage;
