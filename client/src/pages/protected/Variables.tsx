import React from 'react'
import { Badge, Box, Button, Heading, Table, TableScrollArea, Text } from "@chakra-ui/react"
import { BiSolidEditAlt, BiSolidFolderOpen, BiSolidFolderPlus } from 'react-icons/bi'
import NewMonthlyTargetSalesDialog from "@/components/dialog/protected/NewMonthlyTargetSalesDialog"
import UpdateMonthlyTargetSalesDetailsDialog from '@/components/dialog/protected/UpdateMonthlyTargetSalesDetailsDialog'
import MonthlyTargetSalesDetailsDialog from '@/components/dialog/protected/MonthlyTargetSalesDetailsDialog'

export default function Variables() {

    const [isNewMonthlyTargetSalesDialogOpen, setIsNewMonthlyTargetSalesDialogOpen] = React.useState<boolean>(false)
    const [isUpdateMonthlyTargetSalesDialogOpen, setIsUpdateMonthlyTargetSalesDialogOpen] = React.useState<boolean>(false)
    const [isMonthlyTargetSalesDetailsDialogOpen, setIsMonthlyTargetSalesDetailsDialogOpen] = React.useState<boolean>(false)

    //#region Dialog Trigger 

    const openNewMonthlyTargetSalesDialog = () => setIsNewMonthlyTargetSalesDialogOpen(true)
    const closeNewMonthlyTargetSalesDialog = () => setIsNewMonthlyTargetSalesDialogOpen(false)
    const openUpdateMonthlyTargetSalesDialog = () => setIsUpdateMonthlyTargetSalesDialogOpen(true)
    const closeUpdateMonthlyTargetSalesDialog = () => setIsUpdateMonthlyTargetSalesDialogOpen(false)
    const openMonthlyTargetSalesDetailsDialog = () => setIsMonthlyTargetSalesDetailsDialogOpen(true)
    const closeMonthlyTargetSalesDetailsDialog = () => setIsMonthlyTargetSalesDetailsDialogOpen(false)

    //#endregion

    return (
        <Box w='100%' h='100%' p='0 .5rem' display='flex' flexDir='column'>
            <Box w='inherit' h='inherit'>
                <Heading fontSize='.8rem' fontWeight='bold' textTransform='uppercase'>Sales Target Variables</Heading>
                <hr />
                <TableScrollArea mt='.5rem'>
                    <Table.Root size='sm' w='100%' variant='line' stickyHeader interactive showColumnBorder>
                        <Table.Header>
                            <Table.Row bg='blue.500'>
                                <Table.ColumnHeader colSpan={9} p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase'>Quarterly Sales Target</Table.ColumnHeader>
                            </Table.Row>
                            <Table.Row bg='green'>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase'>Quarter</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase'>Year</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase'>Month</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase'>Product Group</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Total Target Sales</Table.ColumnHeader>
                                <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Action</Table.ColumnHeader>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row bg='gray.100'>
                                <Table.Cell p='.3rem .5rem'>
                                    <Badge variant='solid' colorPalette='blue' fontSize='.7rem' fontWeight='bold' borderRadius='lg'>1st Quarter</Badge>
                                </Table.Cell>
                                <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>2026</Table.Cell>
                                <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>[Start Month] - [End Month]</Table.Cell>
                                <Table.Cell p='.3rem .5rem' fontSize='.7rem'>
                                    <Box display='flex' alignItems='center' justifyContent='left' gap='.2rem'>
                                        <Text>Group</Text>
                                        <Text fontWeight='bold'>B</Text>
                                        <Text>products</Text>
                                    </Box>
                                </Table.Cell>
                                <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>
                                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                                        <Text>₱</Text>
                                        <Text>20,000.00</Text>
                                    </Box>
                                </Table.Cell>
                                <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>
                                    <Box display='flex' justifyContent='center' gap='.3rem'>
                                        <Button onClick={openMonthlyTargetSalesDetailsDialog} size='xs' h='1.5rem' colorPalette='teal' fontSize='.6rem' textTransform='uppercase' borderRadius='lg'><BiSolidFolderOpen /> Check Details</Button>
                                        <Button onClick={openUpdateMonthlyTargetSalesDialog} size='xs' h='1.5rem' colorPalette='blue' fontSize='.6rem' textTransform='uppercase' borderRadius='lg'><BiSolidEditAlt />Update</Button>
                                    </Box>
                                </Table.Cell>
                            </Table.Row>

                            <Table.Row bg='gray.100'>
                                <Table.Cell p='.3rem .5rem'>
                                    <Badge variant='solid' colorPalette='orange' fontSize='.7rem' fontWeight='bold' borderRadius='lg'>2nd Quarter</Badge>
                                </Table.Cell>
                                <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>2026</Table.Cell>
                                <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>[Start Month] - [End Month]</Table.Cell>
                                <Table.Cell p='.3rem .5rem' fontSize='.7rem'>
                                    <Box display='flex' alignItems='center' justifyContent='left' gap='.2rem'>
                                        <Text>Group</Text>
                                        <Text fontWeight='bold'>C</Text>
                                        <Text>products</Text>
                                    </Box>
                                </Table.Cell>
                                <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>
                                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                                        <Text>₱</Text>
                                        <Text>50,000.00</Text>
                                    </Box>
                                </Table.Cell>
                                <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>
                                    <Box display='flex' justifyContent='center' gap='.3rem'>
                                        <Button onClick={openMonthlyTargetSalesDetailsDialog} size='xs' h='1.5rem' colorPalette='teal' fontSize='.6rem' textTransform='uppercase' borderRadius='lg'><BiSolidFolderOpen /> Check Details</Button>
                                        <Button onClick={openUpdateMonthlyTargetSalesDialog} size='xs' h='1.5rem' colorPalette='blue' fontSize='.6rem' textTransform='uppercase' borderRadius='lg'><BiSolidEditAlt />Update</Button>
                                    </Box>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row bg='blue.100'>
                                <Table.Cell colSpan={5} p='.3rem .5rem' fontSize='.7rem'>Note: Maximum of [number] Quarters per year only.</Table.Cell>
                                <Table.Cell p='.3rem .5rem' textAlign='center'>
                                    <Button onClick={openNewMonthlyTargetSalesDialog} size='xs' h='1.5rem' colorPalette='green' fontSize='.6rem' textTransform='uppercase' borderRadius='lg'><BiSolidFolderPlus /> Add New</Button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table.Root>
                </TableScrollArea>
            </Box>

            {/* Dialog */}
            <NewMonthlyTargetSalesDialog openDialog={isNewMonthlyTargetSalesDialogOpen} closeDialog={closeNewMonthlyTargetSalesDialog} />
            <UpdateMonthlyTargetSalesDetailsDialog openDialog={isUpdateMonthlyTargetSalesDialogOpen} closeDialog={closeUpdateMonthlyTargetSalesDialog} />
            <MonthlyTargetSalesDetailsDialog openDialog={isMonthlyTargetSalesDetailsDialogOpen} closeDialog={closeMonthlyTargetSalesDetailsDialog} />
        </Box>
    )
}
