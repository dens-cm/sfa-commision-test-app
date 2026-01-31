// import React from 'react'
import { Box, HStack, Separator, Text } from '@chakra-ui/react'

export default function App() {
    return (
        <Box>
            <Text>Landing Page</Text>
            <HStack w='100%' mt='.5rem'>
                <Separator flex='1' />
                <Text flexShrink='0' fontSize='.8rem'><a href='/login' style={{ color: 'blue', fontWeight: 'bold' }}>Log in</a>  or  <a href='/register' style={{ color: 'blue', fontWeight: 'bold' }}>Register</a></Text>
                <Separator flex='1' />
            </HStack>
        </Box>
    )
}
