import { createContext, useContext } from 'react'

export const StoreContext = createContext();

export function useStore() {
  return useContext(StoreContext);
}