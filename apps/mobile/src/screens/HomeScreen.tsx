import React from 'react';
import { Box, Text, VStack } from 'native-base';
import { WelcomeMessage } from '@yoruba-app/shared';

export function HomeScreen() {
  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
      <VStack space={4} alignItems="center">
        <Text fontSize="xl" fontWeight="bold">
          Welcome to Yoruba Learning App
        </Text>
        <WelcomeMessage />
      </VStack>
    </Box>
  );
}