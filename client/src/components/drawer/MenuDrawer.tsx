import React from 'react'
import { Avatar, Box, Button, Drawer, DrawerBackdrop, DrawerPositioner, Portal, AvatarFallback, Text, Stack, HStack, Skeleton } from '@chakra-ui/react'
import { BiX } from "react-icons/bi"
import { type UserType } from '@/utils/auth/UserTypes'
import { getViewsConfig } from '@/config/ViewsConfig'

type MenuDrawerProps = {
    openDrawer: boolean
    closeDrawer: () => void
    currentView: string
    view: (viewName: string) => void
    userType: UserType | null
    authLoading: boolean
}

export default function MenuDrawer({ openDrawer, closeDrawer, view, currentView, userType, authLoading }: MenuDrawerProps) {

    const viewsConfig = React.useMemo(() => getViewsConfig(userType ?? undefined), [userType])

    const switchView = (setView: string): void => {
        view(setView)
        closeDrawer()
    }

    return (
        <Drawer.Root open={openDrawer} onOpenChange={closeDrawer} size='xs'>
            <Portal>
                <DrawerBackdrop />
                <DrawerPositioner>
                    <Drawer.Content p='1rem'>
                        <Drawer.Header p='0' mb='1rem'>
                            {authLoading ? (
                                <Skeleton w='100%' h='2.5rem' borderRadius='xl' />
                            ) : (
                                <HStack w='100%' h='2.5rem' gap='.5rem'>
                                    <Box w='100%' h='100%' p='.4rem' borderRadius='xl' shadow='sm'>
                                        <a href='/account' style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                                            <Box w='1.7rem' h='100%'>
                                                <Avatar.Root w='100%' h='100%'>
                                                    <AvatarFallback name='test name' />
                                                </Avatar.Root   >
                                            </Box>
                                            <Text m='0 .5rem' fontSize='.9rem' fontWeight='bold' truncate>Test Name</Text>
                                        </a>
                                    </Box>
                                </HStack>
                            )}

                        </Drawer.Header>

                        <hr />

                        <Drawer.Body p='0'>
                            {authLoading ? (
                                <Stack h='100%' p='1rem 0 1rem' gap='1.5rem' overflow='auto' scrollbar='hidden'>
                                    {viewsConfig.filter(section => userType && section.roles.includes(userType)).map((section) => (
                                        <Stack key={section.section} gap='.5rem'>
                                            <Skeleton h='1.2rem' borderRadius='xl' />
                                            <Stack gap='.3rem'>
                                                {section.items.filter(item => !item.hidden).map((_item, i) => (
                                                    <Skeleton key={i} w='100%' h='2.2rem' borderRadius='xl' />
                                                ))}
                                            </Stack>
                                        </Stack>
                                    ))}
                                </Stack>
                            ) : (
                                <Stack h='100%' p='1rem 0 1rem' gap='1.5rem' overflow='auto' scrollbar='hidden'>
                                    {viewsConfig.filter(section => userType !== null && section.roles.includes(userType)).map((section) => (
                                        <Stack key={section.section} gap='.5rem'>
                                            <Text color="base" fontSize=".7rem" fontWeight="semibold" textTransform="capitalize" truncate>{section.section}</Text>
                                            <Stack gap=".3rem">
                                                {section.items.map((item) => {
                                                    if (item.hidden) return null
                                                    const Icon = item.icon

                                                    return (
                                                        <Button key={item.key} onClick={() => switchView(item.key)} w="100%" colorPalette={currentView === item.key ? "blue" : "gray"} variant={currentView === item.key ? "solid" : "subtle"} size="sm" fontSize=".8rem" textTransform="capitalize" display="flex" justifyContent="left" _hover={{ bg: "blue", color: "white" }} borderRadius="xl">
                                                            <Icon />
                                                            <Text truncate>{item.label}</Text>
                                                        </Button>
                                                    )
                                                })}
                                            </Stack>
                                        </Stack>
                                    ))}
                                </Stack>
                            )}
                        </Drawer.Body>

                        <hr />

                        <Drawer.Footer mt='1rem' p='0'>
                            <Button onClick={closeDrawer} w='100%' size='sm' bg='base' fontSize='.7rem' fontWeight='bold' textTransform='uppercase' display='flex' justifyContent='left' borderRadius='xl'><BiX />Close</Button>
                        </Drawer.Footer>
                    </Drawer.Content>
                </DrawerPositioner >
            </Portal >
        </Drawer.Root >
    )
}