// import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { ScaleLoader } from "react-spinners"

export default function InterfaceLoading() {
    return (
        <Box bg='gray.50' w='100vw' h='100vh' gap='1rem' p='1rem' display='flex' flexDir='column' alignItems='center' justifyContent='center'>
            <Box bg='white' w={{ base: '100%', sm: '50%', md: '20%' }} display='inherit' flexDir='inherit' alignItems='inherit' justifyContent='inherit' p='.5rem' borderRadius='lg' boxShadow='md'>
                <Text fontSize='.7rem' fontWeight='semibold' textTransform='uppercase' color='teal'>Checking Connection</Text>
            </Box>
            <ScaleLoader width='.5rem' height='1rem' radius={10} speedMultiplier={.8} barCount={6} color='teal' aria-label="Loading Spinner" data-testid="loader" />
        </Box>
    )
}
