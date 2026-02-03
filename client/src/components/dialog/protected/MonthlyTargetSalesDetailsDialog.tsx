// import React from 'react'
import { Dialog, IconButton, Portal, Stack, Button, Badge, Text, Box, HStack, TableScrollArea, Table, Blockquote } from "@chakra-ui/react"
import { BiSolidFolderOpen, BiX } from "react-icons/bi"

type DialogProps = {
    openDialog: boolean
    closeDialog: () => void
}

export default function MonthlyTargetSalesDetailsDialog({ openDialog, closeDialog }: DialogProps) {

    const onCloseDialog = () => {
        closeDialog()
    }

    return (
        <Dialog.Root open={openDialog} onOpenChange={closeDialog} size='lg' role="alertdialog">
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner p={{ base: '.5rem', md: '0' }}>
                    <Dialog.Content p='0 .5rem' borderRadius='xl'>
                        <Dialog.Header p='.5rem 0' display='flex' justifyContent='space-between'>
                            <Badge h='100' w='100%' variant='solid' colorPalette='teal' fontSize='.7rem' fontWeight='bold' textTransform='uppercase' borderRadius='lg'><BiSolidFolderOpen /> Target Sales </Badge>
                            <IconButton onClick={onCloseDialog} size='xs' variant='subtle' colorPalette='blue' borderRadius='lg'>
                                <BiX />
                            </IconButton>
                        </Dialog.Header>
                        <hr />
                        <Dialog.Body p='.5rem .5rem' display='flex' flexDir='column' gap='1rem'>
                            <Blockquote.Root bg='bg.subtle' p='.5rem'>
                                <Blockquote.Content w='100%'>
                                    <Stack w='100%' gap='.5rem'>
                                        <HStack w='100%'>
                                            <Box w='100%'>
                                                <Text fontSize='.7rem'>Quarter:</Text>
                                                <Text fontSize='.7rem' fontWeight='bold' textTransform='uppercase'>1st Quarter</Text>
                                            </Box>
                                            <Box w='100%'>
                                                <Text fontSize='.7rem'>Year:</Text>
                                                <Text fontSize='.7rem' fontWeight='bold' textTransform='uppercase'>2026</Text>
                                            </Box>
                                        </HStack>
                                        <HStack w='100%'>
                                            <Box w='100%'>
                                                <Text fontSize='.7rem'>Month:</Text>
                                                <Text fontSize='.7rem' fontWeight='bold' textTransform='uppercase'>[Start Month] - [End Month]</Text>
                                            </Box>
                                            <Box w='100%'>
                                                <Text fontSize='.7rem'>Product Group:</Text>
                                                <Text fontSize='.7rem' fontWeight='bold' textTransform='uppercase'>B</Text>
                                            </Box>
                                        </HStack>
                                    </Stack>
                                </Blockquote.Content>
                            </Blockquote.Root>
                            <hr />
                            <Blockquote.Root bg='green.subtle' p='.5rem'>
                                <Blockquote.Content w='100%'>
                                    <HStack w='100%'>
                                        <Text w='100%' fontSize='.7rem' fontWeight='semibold'>Total Target Sales:</Text>
                                        <Text w='100%' fontSize='.7rem' fontWeight='bold' textTransform='uppercase'>₱ 20,000.00</Text>
                                    </HStack>
                                </Blockquote.Content>
                            </Blockquote.Root>
                            <hr />
                            <TableScrollArea>
                                <Table.Root size='sm' w='100%' variant='line' stickyHeader interactive showColumnBorder>
                                    <Table.Header>
                                        <Table.Row bg='green'>
                                            <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase'>Product</Table.ColumnHeader>
                                            <Table.ColumnHeader p='.3rem .5rem' color='white' fontSize='.7rem' textTransform='uppercase' textAlign='center'>Target Sales</Table.ColumnHeader>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell p='.3rem .5rem'>
                                                <Badge variant='subtle' colorPalette='blue' fontSize='.7rem' fontWeight='bold' borderRadius='lg'>[ Product Name ]</Badge>
                                            </Table.Cell>
                                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>
                                                <Box display='flex' alignItems='center' justifyContent='space-between'>
                                                    <Text>₱</Text>
                                                    <Text>10,000.00</Text>
                                                </Box>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell p='.3rem .5rem'>
                                                <Badge variant='subtle' colorPalette='blue' fontSize='.7rem' fontWeight='bold' borderRadius='lg'>[ Product Name ]</Badge>
                                            </Table.Cell>
                                            <Table.Cell p='.3rem .5rem' fontSize='.7rem' fontWeight='bold'>
                                                <Box display='flex' alignItems='center' justifyContent='space-between'>
                                                    <Text>₱</Text>
                                                    <Text>10,000.00</Text>
                                                </Box>
                                            </Table.Cell>
                                        </Table.Row>
                                        <Table.Row bg='blue.100'>
                                            <Table.Cell colSpan={2} p='.3rem .5rem' fontSize='.7rem'>Added By: [Name] | Date Added: [Date] | Updated By: [Name] | Date Updated: [Date]</Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table.Root>
                            </TableScrollArea>

                        </Dialog.Body>
                        <hr />
                        <Dialog.Footer p='.5rem 0' gap='.5rem'>
                            <Button onClick={onCloseDialog} size='xs' variant='solid' colorPalette='blue' h='1.7rem' fontSize='.7rem' textTransform='uppercase' borderRadius='lg'><BiX /> Close</Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}
