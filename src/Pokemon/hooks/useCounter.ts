import { useEffect, useState } from 'react';

interface useCounterProps {
  initialState?: number;
}

export const useCounter = ({ initialState = 0 }: useCounterProps) => {
  const [counter, setCounter] = useState(initialState);

  const suma = () => setCounter(counter + 1);
  const rest = () => setCounter(initialState);

  useEffect(() => {
    if (initialState) setCounter(initialState);
  }, [initialState]);

  return {
    counter,
    suma,
    rest,
  };
};
