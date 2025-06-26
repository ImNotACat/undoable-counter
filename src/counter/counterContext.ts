import { createContext } from 'react';
import type { State, Action } from './counterTypes';

export const CounterContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);