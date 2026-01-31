import React from 'react'
import { Box, Button, IconButton, Image, Skeleton, Stack, Text } from '@chakra-ui/react'
import { Sidebar, Menu } from 'react-pro-sidebar'
import { type UserType } from '@/utils/auth/UserTypes'
import { getViewsConfig } from '@/config/ViewsConfig'

interface NavbarProps {
    view: (viewName: string) => void
    currentView: string
    userType: UserType | null
    authLoading: boolean
}

export default function Navbar({ view, currentView, userType, authLoading }: NavbarProps) {

    const [collapsed, setCollapsed] = React.useState<boolean>(true)
    const viewsConfig = React.useMemo(() => getViewsConfig(userType ?? undefined), [userType])

    return (
        <Box h='100%' display={{ base: 'none', md: 'flex' }}>
            <Box h='100%' display='flex' flexDir='column'>

                <Box h='3.5rem' p='.6rem 0 .6rem .4rem' display='flex' alignItems='center' gap='.5rem'>
                    <Image src='https://placehold.co/400x300/cccccc/969696.png?font=lato' alt='Logo' h='2.3rem' />
                    {!collapsed && (
                        <Text truncate>Simple SFA</Text>
                    )}
                </Box>

                <hr />

                <Box h='100%' pt='.5rem' overflow='auto' scrollbar='hidden'>
                    <Sidebar width='15rem' backgroundColor='none' collapsedWidth='3.5rem' collapsed={collapsed} onMouseEnter={() => setCollapsed(false)} onMouseLeave={() => setCollapsed(true)} transitionDuration={300}>
                        <Menu style={{ padding: '0 .5rem' }}>
                            <Box>
                                {authLoading ? (
                                    <>
                                        <Stack m='.5rem 0' gap='1.5rem' display={collapsed ? 'none' : 'flex'}>
                                            {viewsConfig.filter(section => userType !== null && section.roles.includes(userType)).map((section) => (
                                                <Stack key={section.section} gap='.5rem'>
                                                    <Skeleton h='1rem' borderRadius='full' />
                                                    <Stack gap=".3rem">
                                                        {section.items.map((item) => {
                                                            if (item.hidden) return null

                                                            return (
                                                                <Skeleton h='2.2rem' borderRadius='full' />
                                                            )
                                                        })}
                                                    </Stack>
                                                </Stack>
                                            ))}
                                        </Stack>
                                        <Stack m='.5rem 0' gap='1.5rem' display={collapsed ? 'flex' : 'none'}>
                                            {viewsConfig.filter(section => userType !== null && section.roles.includes(userType)).map((section) => (
                                                <Stack key={section.section} gap='.5rem'>
                                                    <Skeleton h='1rem' borderRadius='full' />
                                                    <Stack gap=".3rem">
                                                        {section.items.map((item) => {
                                                            if (item.hidden) return null

                                                            return (
                                                                <Skeleton h='2.2rem' borderRadius='xl' />
                                                            )
                                                        })}
                                                    </Stack>
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </>
                                ) : (
                                    <>
                                        {/* collapsed navbar = false */}
                                        <Stack m='.5rem 0' gap='1.5rem' display={collapsed ? 'none' : 'flex'}>
                                            {viewsConfig.filter(section => userType !== null && section.roles.includes(userType)).map((section) => (
                                                <Stack key={section.section} gap='.5rem'>
                                                    <Text color="base" fontSize=".7rem" fontWeight="semibold" textTransform="capitalize" truncate>{section.section}</Text>
                                                    <Stack gap=".3rem">
                                                        {section.items.map((item) => {
                                                            if (item.hidden) return null
                                                            const Icon = item.icon

                                                            return (
                                                                <Button key={item.key} onClick={() => view(item.key)} w="100%" colorPalette={currentView === item.key ? "teal" : "gray"} variant={currentView === item.key ? "solid" : "subtle"} size="sm" fontSize=".8rem" textTransform="capitalize" display="flex" justifyContent="left" _hover={{ bg: "teal", color: "white" }} borderRadius="xl">
                                                                    <Icon />
                                                                    <Text truncate>{item.label}</Text>
                                                                </Button>
                                                            )
                                                        })}
                                                    </Stack>
                                                </Stack>
                                            ))}
                                        </Stack>

                                        {/* collapsed navbar = true */}
                                        <Stack m='.5rem 0' gap='1.5rem' display={collapsed ? 'flex' : 'none'}>
                                            {viewsConfig.filter(section => userType !== null && section.roles.includes(userType)).map((section) => (
                                                <Stack key={section.section} gap='.5rem'>
                                                    <Text color="base" fontSize=".7rem" fontWeight="semibold" textTransform="capitalize" truncate>{section.section}</Text>
                                                    <Stack gap=".3rem">
                                                        {section.items.map((item) => {
                                                            if (item.hidden) return null
                                                            const Icon = item.icon

                                                            return (
                                                                <IconButton key={item.key} onClick={() => view(item.key)} colorPalette={currentView === item.key ? "teal" : "gray"} variant={currentView === item.key ? "solid" : "subtle"} size='sm' fontSize='.7rem' borderRadius='xl'><Icon /></IconButton>
                                                            )
                                                        })}
                                                    </Stack>
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </>
                                )}
                            </Box>
                        </Menu>
                    </Sidebar>
                </Box>
            </Box>
        </Box >
    )
}
