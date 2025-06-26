// src/counter/counterContext.tsx
import React, { useReducer, useEffect } from 'react';
import { counterReducer, initialState } from './counterReducer';
import { CounterContext } from './counterContext';
import type { State } from './counterTypes';

const STORAGE_KEY = 'counterAppState';

function loadInitialState(): State {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch { 
    console.log('There was an error when loading the initial state')
  }
  return initialState;
}

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, loadInitialState());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
