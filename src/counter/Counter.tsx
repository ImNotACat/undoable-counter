import React from 'react';
import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import { useCounter } from './useCounter';

export const Counter: React.FC = () => {
  const { state, dispatch } = useCounter();

  return (
    <VStack  align="center" mt={10}>
      <Text fontSize="4xl" fontWeight="bold">
        {state.present}
      </Text>

      <HStack >
        <Button colorPalette="cyan" variant="surface" onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </Button>
        <Button colorPalette="cyan" variant="surface" onClick={() => dispatch({ type: 'DECREMENT' })}>
          Decrement
        </Button>
      </HStack>

      <HStack >
        <Button
          colorPalette="cyan" variant="outline"
          onClick={() => dispatch({ type: 'UNDO' })}
          disabled={state.past.length === 0}
        >
          Undo
        </Button>
        <Button
          colorPalette="cyan" variant="outline"
          onClick={() => dispatch({ type: 'REDO' })}
          disabled={state.future.length === 0}
        >
          Redo
        </Button>
      </HStack>
    </VStack>
  );
};
