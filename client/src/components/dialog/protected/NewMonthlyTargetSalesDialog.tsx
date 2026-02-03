import React from 'react'
import { Input, Dialog, Field, IconButton, Portal, Stack, Select, createListCollection, Button, Badge, Text, Box, SimpleGrid, HStack, Blockquote } from "@chakra-ui/react"
import { BiCheck, BiSolidFolderPlus, BiX } from "react-icons/bi"

type DialogProps = {
    openDialog: boolean
    closeDialog: () => void
}

export default function NewMonthlyTargetSalesDialog({ openDialog, closeDialog }: DialogProps) {

    const [selectedQuarter, setSelectedQuarter] = React.useState<number | null>(null)
    const [selectedYear, setSelectedYear] = React.useState<number | null>(null)
    const [selectedGroup, setSelectedGroup] = React.useState<number | null>(null)

    const quarters = createListCollection({
        items: [
            { label: "1st Quarter", value: 1 },
            { label: "2nd Quarter", value: 2 },
            { label: "3rd Quarter", value: 3 },
            { label: "4th Quarter", value: 4 }
        ]
    })

    const startYear = new Date().getFullYear()
    const endYear = new Date().getFullYear() + 5

    const years = createListCollection({
        items: Array.from(
            { length: endYear - startYear + 1 },
            (_, i) => {
                const year = startYear + i
                return {
                    label: year.toString(),
                    value: year
                }
            }
        )
    })

    const productGroups = createListCollection({
        items: [
            { label: "Group A", value: 1 },
            { label: "Group B", value: 2 },
            { label: "Group C", value: 3 }
        ]
    })

    const mappedSelectedQuarter = quarters.items.find(q => q.value === selectedQuarter)?.label
    const mappedSelectedYear = years.items.find(y => y.value === selectedYear)?.label ?? 'N/A'

    const productGroupProducts: Record<number, string[]> = {
        1: [
            "Celevo", "Dutarid", "Finarid", "Kessen",
            "Noston", "Pimax", "Sefos"
        ],
        2: [
            "Bromisin", "Eneraplus", "Iruden", "Lintaz",
            "Napran", "Roxicef Susp", "Roxicef Vial",
            "Tricexone", "Zomep", "Zryt"
        ],
        3: [
            "Antoreb", "Clopate", "Dutimax", "Galzid",
            "Livitmed", "Mistasyl", "Mistel", "Odasyl",
            "Varostin", "Virusil"
        ]
    }

    const selectedGroupLabel = productGroups.items.find(g => g.value === selectedGroup)?.label

    const onCloseDialog = () => {
        setSelectedQuarter(null)
        setSelectedYear(null)
        setSelectedGroup(null)
        closeDialog()
    }

    return (
        <Dialog.Root open={openDialog} onOpenChange={closeDialog} size='lg' role="alertdialog">
            <Portal>
                <form>
                    <Dialog.Backdrop />
                    <Dialog.Positioner p={{ base: '.5rem', md: '0' }}>
                        <Dialog.Content p='0 .5rem' borderRadius='xl'>
                            <Dialog.Header p='.5rem 0' display='flex' justifyContent='space-between'>
                                <Badge h='100' w='100%' variant='solid' colorPalette='blue' fontSize='.7rem' fontWeight='bold' textTransform='uppercase' borderRadius='lg'><BiSolidFolderPlus /> New Target Sales</Badge>
                                <IconButton onClick={onCloseDialog} size='xs' variant='subtle' colorPalette='blue' borderRadius='lg'>
                                    <BiX />
                                </IconButton>
                            </Dialog.Header>
                            <hr />
                            <Dialog.Body p='.5rem .5rem' display='flex' flexDir='column' gap='1rem'>
                                <Stack direction={{ base: 'column', md: 'row' }}>
                                    {/* Quarter */}
                                    <Field.Root gap='0'>
                                        <Field.Label fontSize='.7rem' textTransform='uppercase'>Quarter</Field.Label>
                                        <Select.Root required size='xs' collection={quarters} onValueChange={(details) => setSelectedQuarter(details.value[0] ? parseInt(details.value[0], 10) : null)}>
                                            <Select.HiddenSelect />
                                            <Select.Control>
                                                <Select.Trigger borderRadius='lg'>
                                                    <Select.ValueText placeholder="Select Quarter" fontSize='.8rem' />
                                                </Select.Trigger>
                                                <Select.IndicatorGroup>
                                                    <Select.Indicator />
                                                </Select.IndicatorGroup>
                                            </Select.Control>
                                            <Select.Positioner>
                                                <Select.Content borderRadius='lg'>
                                                    {quarters.items.map((quarters) => (
                                                        <Select.Item item={quarters} key={quarters.value} fontSize='.8rem'>
                                                            {quarters.label}
                                                            <Select.ItemIndicator />
                                                        </Select.Item>
                                                    ))}
                                                </Select.Content>
                                            </Select.Positioner>
                                        </Select.Root>
                                    </Field.Root>

                                    {/* Year */}
                                    <Field.Root gap='0'>
                                        <Field.Label fontSize='.7rem' textTransform='uppercase'>Year</Field.Label>
                                        <Select.Root required size='xs' collection={years} onValueChange={(details) => setSelectedYear(details.value[0] ? parseInt(details.value[0], 10) : null)}>
                                            <Select.HiddenSelect />
                                            <Select.Control>
                                                <Select.Trigger borderRadius='lg'>
                                                    <Select.ValueText placeholder="Select Year" fontSize='.8rem' />
                                                </Select.Trigger>
                                                <Select.IndicatorGroup>
                                                    <Select.Indicator />
                                                </Select.IndicatorGroup>
                                            </Select.Control>
                                            <Select.Positioner>
                                                <Select.Content borderRadius='lg'>
                                                    {years.items.map((years) => (
                                                        <Select.Item item={years} key={years.value} fontSize='.8rem'>
                                                            {years.label}
                                                            <Select.ItemIndicator />
                                                        </Select.Item>
                                                    ))}
                                                </Select.Content>
                                            </Select.Positioner>
                                        </Select.Root>
                                    </Field.Root>
                                </Stack>

                                {selectedQuarter && (
                                    <Box>
                                        <hr />
                                        <Blockquote.Root m='.3rem 0' bg='bg.subtle' p='.5rem'>
                                            <Blockquote.Content>
                                                <HStack gap='.5rem' fontSize='.7rem' textTransform='uppercase'>
                                                    <Text fontWeight='semibold'>{mappedSelectedQuarter}:</Text>
                                                    <Text>[Start Month] - [End Month] | {mappedSelectedYear}</Text>
                                                </HStack>
                                            </Blockquote.Content>
                                        </Blockquote.Root>
                                        <hr />
                                    </Box>
                                )}

                                <Stack direction={{ base: 'column', md: 'row' }}>

                                    {/* Product Group */}
                                    <Field.Root gap='0'>
                                        <Field.Label fontSize='.7rem' textTransform='uppercase'>Product Group</Field.Label>
                                        <Select.Root required size='xs' collection={productGroups} onValueChange={(details) => setSelectedGroup(details.value[0] ? parseInt(details.value[0], 10) : null)}>
                                            <Select.HiddenSelect />
                                            <Select.Control>
                                                <Select.Trigger borderRadius='lg'>
                                                    <Select.ValueText placeholder="Select Product Group" fontSize='.8rem' />
                                                </Select.Trigger>
                                                <Select.IndicatorGroup>
                                                    <Select.Indicator />
                                                </Select.IndicatorGroup>
                                            </Select.Control>
                                            <Select.Positioner>
                                                <Select.Content borderRadius='lg'>
                                                    {productGroups.items.map((productGroups) => (
                                                        <Select.Item item={productGroups} key={productGroups.value} fontSize='.8rem'>
                                                            {productGroups.label}
                                                            <Select.ItemIndicator />
                                                        </Select.Item>
                                                    ))}
                                                </Select.Content>
                                            </Select.Positioner>
                                        </Select.Root>
                                    </Field.Root>
                                </Stack>

                                {/* Product Selected */}
                                <Box>
                                    {selectedGroup && (
                                        <>
                                            <hr />
                                            <Blockquote.Root m='.3rem 0' bg='green.subtle' p='.5rem' gap='0'>
                                                <Blockquote.Content>
                                                    <Text fontSize='.7rem' fontWeight='bold'>{selectedGroupLabel} Products:</Text>
                                                </Blockquote.Content>
                                                <Blockquote.Caption fontSize='.8rem' fontStyle='italic'>
                                                    (Enter Target Sales Value in Peso)
                                                </Blockquote.Caption>
                                            </Blockquote.Root>
                                            <hr />
                                            <SimpleGrid columns={2} p='.5rem' mt='.5rem' gap='.8rem'>
                                                {productGroupProducts[selectedGroup].map((product) => (
                                                    <Field.Root key={product} gap='.3rem'>
                                                        <Badge variant='subtle' colorPalette='blue' fontSize='.6rem' fontWeight='bold' textTransform='uppercase' borderRadius='md'>{product}</Badge>
                                                        <Input type='number' required size='xs' borderRadius='lg' placeholder='Monthly Target Sales' />
                                                    </Field.Root>
                                                ))}
                                            </SimpleGrid>
                                        </>
                                    )}
                                </Box>

                            </Dialog.Body>
                            <hr />
                            <Dialog.Footer p='.5rem 0' gap='.5rem'>
                                <Button onClick={onCloseDialog} size='xs' variant='subtle' h='1.7rem' fontSize='.7rem' textTransform='uppercase' borderRadius='lg'><BiX /> Cancel</Button>
                                <Button type='submit' size='xs' colorPalette='blue' h='1.7rem' fontSize='.7rem' textTransform='uppercase' borderRadius='lg'><BiCheck /> Save</Button>
                            </Dialog.Footer>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </form>
            </Portal>
        </Dialog.Root>
    )
}
