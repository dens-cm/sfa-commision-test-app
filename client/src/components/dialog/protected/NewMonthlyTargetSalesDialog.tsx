import React from 'react'
import { Input, Dialog, Field, IconButton, Portal, Stack, Select, createListCollection, Button, Badge, Text, Box, SimpleGrid } from "@chakra-ui/react"
import { BiCheck, BiSolidFolderPlus, BiX } from "react-icons/bi"

type DialogProps = {
    openDialog: boolean
    closeDialog: () => void
}

export default function NewMonthlyTargetSalesDialog({ openDialog, closeDialog }: DialogProps) {

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

    const months = createListCollection({
        items: Array.from({ length: 12 }, (_, i) => {
            const date = new Date(2026, i, 1)
            const label = date.toLocaleString(undefined, { month: "long" })

            return {
                label,
                value: i + 1
            }
        })
    })

    const productGroups = createListCollection({
        items: [
            { label: "Group A", value: 1 },
            { label: "Group B", value: 2 },
            { label: "Group C", value: 3 }
        ]
    })

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
                                        <Select.Root required size='xs' collection={quarters}>
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
                                        <Select.Root required size='xs' collection={years}>
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

                                    {/* Month */}
                                    <Field.Root gap='0'>
                                        <Field.Label fontSize='.7rem' textTransform='uppercase'>Month</Field.Label>
                                        <Select.Root required size='xs' collection={months}>
                                            <Select.HiddenSelect />
                                            <Select.Control>
                                                <Select.Trigger borderRadius='lg'>
                                                    <Select.ValueText placeholder="Select Month" fontSize='.8rem' />
                                                </Select.Trigger>
                                                <Select.IndicatorGroup>
                                                    <Select.Indicator />
                                                </Select.IndicatorGroup>
                                            </Select.Control>
                                            <Select.Positioner>
                                                <Select.Content borderRadius='lg'>
                                                    {months.items.map((months) => (
                                                        <Select.Item item={months} key={months.value} fontSize='.8rem'>
                                                            {months.label}
                                                            <Select.ItemIndicator />
                                                        </Select.Item>
                                                    ))}
                                                </Select.Content>
                                            </Select.Positioner>
                                        </Select.Root>
                                    </Field.Root>
                                </Stack>

                                <Stack direction={{ base: 'column', md: 'row' }}>
                                    {/* Monthly Target */}
                                    {/* <Field.Root gap='0'>
                                        <Field.Label fontSize='.7rem' textTransform='uppercase'>Monthly Target Sales Per Product</Field.Label>
                                        <Input type='number' required size='xs' fontSize='.8rem' borderRadius='lg' placeholder="Target Sales" />
                                    </Field.Root> */}

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
                                    {!selectedGroup ? (
                                        <>
                                            <hr />
                                            <Text m='.3rem 0' fontSize='.8rem' color='gray.500'>Select product group first.</Text>
                                            <hr />
                                        </>
                                    ) : (
                                        <>
                                            <hr />
                                            <Text m='.3rem 0' fontSize='.7rem' fontWeight='bold'>{selectedGroupLabel} Products:</Text>
                                            <hr />
                                            <SimpleGrid columns={2} p='.5rem' mt='.5rem' gap='.8rem'>
                                                {productGroupProducts[selectedGroup].map((product) => (
                                                    <Field.Root key={product} gap='.3rem'>
                                                        <Badge variant='subtle' colorPalette='blue' fontSize='.7rem' fontWeight='bold' borderRadius='lg'>{product}</Badge>
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
