// import React from 'react'
import { Box, Button, HStack, Separator, Text } from '@chakra-ui/react'
import { useLogout } from '@/hooks/authentication/useLogout'

export default function AccountApproval() {

    const { handleLogout, loading } = useLogout()

    return (
        <Box bg='gray.50' w='100vw' h='100vh' gap='1rem' p='1rem' display='flex' flexDir='column' alignItems='center' justifyContent='center'>
            <Box bg='white' w={{ base: '100%', sm: '50%' }} gap='1rem' display='inherit' flexDir='column' alignItems='inherit' justifyContent='inherit' p='2rem' borderRadius='lg' boxShadow='md'>
                <Text fontSize='.7rem' fontWeight='semibold' textAlign='center' textTransform='uppercase' color='teal'>Account is on Approval, please wait or refresh the page.</Text>
                <Button onClick={() => { window.location.reload() }} size='xs' colorPalette='green' fontWeight='bold' textTransform='uppercase' borderRadius='lg'>Refresh Page</Button>
                <HStack w='100%'>
                    <Separator flex='1' />
                    <Text fontSize='.8rem'>Or</Text>
                    <Separator flex='1' />
                </HStack>
                <Button onClick={handleLogout} loading={loading} size='xs' colorPalette='red' fontWeight='bold' textTransform='uppercase' borderRadius='lg'>Log out</Button>
            </Box>
        </Box>
    )
}