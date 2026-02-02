// import React from 'react'
import { Badge, Box, Button, Heading, Highlight, Input, TableScrollArea, Table, Text } from '@chakra-ui/react'

export default function Incentives() {
    return (
        <Box w='100%' h='100%' p='0 .5rem' display='flex' flexDir='column'>
            <Box w='inherit' h='inherit'>
                <Box w='100%' mb='.5rem' display='flex' flexDir={{ base: 'column', md: 'row' }} alignItems={{ md: 'center' }} justifyContent='space-between'>
                    <Heading fontSize='.8rem' fontWeight='bold' textTransform='uppercase'>Incentives</Heading>
                    <Box display='flex' alignItems='center' gap='.5rem'>
                        <Input size='xs' variant='subtle' fontSize='.7rem' borderRadius='lg' placeholder='Select Year' />
                        <Input size='xs' variant='subtle' fontSize='.7rem' borderRadius='lg' placeholder='Select Quanter' />
                        <Button size='xs' variant='solid' colorPalette='blue' fontSize='.7rem' borderRadius='lg'>Load Data</Button>
                    </Box>
                </Box>
                <Badge w='100%' p='.4rem' colorPalette='blue' fontSize='.7rem' fontWeight='bold' textTransform='uppercase' display='flex' alignItems='center' justifyContent='space-between' borderRadius='lg'>
                    <Text>
                        <Highlight query={['SALES PERFORMANCE']} styles={{ color: 'red' }}>
                            2024 QUARTERLY SALES PERFORMANCE VS. TARGET
                        </Highlight>
                    </Text>
                    <Button size='xs' h='1.5rem' colorPalette='green' fontSize='.6rem' textTransform='uppercase' borderRadius='lg'>Export</Button>
                </Badge>
                <TableScrollArea mt='.5rem'>
                    <Table.Root size='sm' w='100%' variant='line' stickyHeader interactive showColumnBorder>
                        <Table.Header>
                            <Table.Row bg='green' borderRadius='xl'>
                                <Table.ColumnHeader rowSpan={3} p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase'>BBDM</Table.ColumnHeader>
                                <Table.ColumnHeader colSpan={8} p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>[Quarter] October - 24</Table.ColumnHeader>
                                <Table.ColumnHeader colSpan={8} p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>[Quarter] November - 24</Table.ColumnHeader>
                            </Table.Row>
                            <Table.Row bg='green' borderRadius='xl'>
                                <Table.ColumnHeader colSpan={5} p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Peso Sales</Table.ColumnHeader>
                                <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                                <Table.ColumnHeader rowSpan={2} p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Monthly Target</Table.ColumnHeader>
                                <Table.ColumnHeader rowSpan={2} p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Percentage Achieved</Table.ColumnHeader>
                                <Table.ColumnHeader colSpan={5} p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Peso Sales</Table.ColumnHeader>
                                <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                                <Table.ColumnHeader rowSpan={2} p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Monthly Target</Table.ColumnHeader>
                                <Table.ColumnHeader rowSpan={2} p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Percentage Achieved</Table.ColumnHeader>
                            </Table.Row>
                            <Table.Row bg='green' borderRadius='xl'>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Mercury</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Southstar Drug</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Actimed</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Watsons</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Others</Table.ColumnHeader>
                                <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Mercury</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Southstar Drug</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Actimed</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Watsons</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Others</Table.ColumnHeader>
                                <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Row bg='blue' color='white'>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>RBDM 1: ESTRELLA LABADAN (SOUTHERN MINDANAO)</Table.Cell>
                            <Table.Cell colSpan={16} p='.3rem .5rem'></Table.Cell>
                        </Table.Row>
                        <Table.Row bg='gray.200' color='green'>
                            <Table.Cell p='.3rem 1rem' fontSize='.7rem' fontWeight='bold'>Group A Products</Table.Cell>
                            <Table.Cell colSpan={16} p='.3rem .5rem'></Table.Cell>
                        </Table.Row>
                        <Table.Row bg='gray.300' color='gray.900'>
                            <Table.Cell p='.3rem 1.5rem' fontSize='.7rem' fontWeight='bold'>Celevo</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                        </Table.Row>
                        <Table.Row bg='gray.300' color='gray.900'>
                            <Table.Cell p='.3rem 1.5rem' fontSize='.7rem' fontWeight='bold'>Dutarid</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                        </Table.Row>
                        <Table.Row bg='gray.400' color='blue'>
                            <Table.Cell p='.3rem 1rem' fontSize='.7rem' fontWeight='bold'>Total Group A Products</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                        </Table.Row>

                        <Table.Row bg='gray.100'>
                            <Table.Cell colSpan={18} p='.1rem'></Table.Cell>
                        </Table.Row>

                        <Table.Row bg='blue' color='white'>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>RBDM 2: ROSELYN JANIER</Table.Cell>
                            <Table.Cell colSpan={16} p='.3rem .5rem'></Table.Cell>
                        </Table.Row>
                        <Table.Row bg='gray.200' color='green'>
                            <Table.Cell p='.3rem 1rem' fontSize='.7rem' fontWeight='bold'>Group A Products</Table.Cell>
                            <Table.Cell colSpan={16} p='.3rem .5rem'></Table.Cell>
                        </Table.Row>
                        <Table.Row bg='gray.300' color='gray.900'>
                            <Table.Cell p='.3rem 1.5rem' fontSize='.7rem' fontWeight='bold'>Celevo</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                        </Table.Row>
                        <Table.Row bg='gray.300' color='gray.900'>
                            <Table.Cell p='.3rem 1.5rem' fontSize='.7rem' fontWeight='bold'>Dutarid</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem'>0.00</Table.Cell>
                        </Table.Row>
                        <Table.Row bg='gray.400' color='blue'>
                            <Table.Cell p='.3rem 1rem' fontSize='.7rem' fontWeight='bold'>Total Group A Products</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                        </Table.Row>

                        <Table.Row bg='gray.100'>
                            <Table.Cell colSpan={9} p='.1rem'></Table.Cell>
                        </Table.Row>

                        <Table.Row bg='green' color='white'>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>RBDM Total</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.ColumnHeader p='0 .1rem 0 0' border='0' bg='gray.100'></Table.ColumnHeader>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>0.00</Table.Cell>
                        </Table.Row>
                    </Table.Root>
                </TableScrollArea>
            </Box>
        </Box>
    )
}
