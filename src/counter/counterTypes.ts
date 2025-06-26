// src/counter/counterTypes.ts

export type State = {
    past: number[];
    present: number;
    future: number[];
  };
  
  export type Action =
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    | { type: 'RESET' }
    | { type: 'UNDO' }
    | { type: 'REDO' };
  