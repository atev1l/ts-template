import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { LocationHistoryContext } from './context/LocationHistoryContext';

interface PropsLocationHistoryProvider {
  children: ReactNode;
}

export const LocationHistoryProvider = (
  props: PropsLocationHistoryProvider
) => {
  const [history, setHistory] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    setHistory(prevState => [...prevState, location.pathname]);
  }, [location.pathname]);

  return (
    <LocationHistoryContext.Provider value={history}>
      {props.children}
    </LocationHistoryContext.Provider>
  );
};
