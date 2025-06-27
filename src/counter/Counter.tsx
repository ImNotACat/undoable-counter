import React from 'react';
import { Button, HStack, Text, VStack } from '@chakra-ui/react';
import { useCounter } from './useCounter';
import { Toaster, toaster } from "@/components/ui/toaster"

export const Counter: React.FC = () => {
  const { state, dispatch } = useCounter();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });

    // Show toast if new value will be 10
    if (state.present + 1 === 10) {
        toaster.create({
        description: 'Congrats! You made it to 10!',
        duration: 3000
      });
    }
  };

  return (
    <>
        <VStack  align="center" mt={10}>
        <Text fontSize="4xl" fontWeight="bold">
            {state.present}
        </Text>

        <HStack >
            <Button colorPalette="cyan" variant="surface" onClick={handleIncrement}>
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
        <HStack>
            <Button
                colorPalette="red" variant="outline"
                onClick={() => dispatch({ type: 'RESET' })}
                >
                Reset
            </Button>
        </HStack>
        </VStack>
        <Toaster />
    </>

    
  );
};
