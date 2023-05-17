import { rootStore } from '../../../stores/RootStore';
import { RootStoreContext } from './context/rootStoreContext';

interface StoreProviderProps {
    children: React.ReactNode;
}

export const StoreProvider = (props: StoreProviderProps) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {props.children}
    </RootStoreContext.Provider>
  );
};