import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box, Heading, VStack } from '@chakra-ui/react'
import { WelcomeMessage } from '@yoruba-app/shared'

function HomePage() {
  return (
    <Box minH="100vh" bg="gray.50" py={8}>
      <VStack spacing={6} align="center" maxW="container.md" mx="auto" px={4}>
        <Heading as="h1" size="xl" textAlign="center">
          Welcome to Yoruba Learning App
        </Heading>
        <WelcomeMessage />
      </VStack>
    </Box>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App