import React from 'react'
import { Avatar, Box, Text, Image, IconButton, Skeleton, Button } from '@chakra-ui/react'
import { BiMenu } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import { type UserType } from '@/utils/auth/UserTypes'
import MenuDrawer from '@/components/drawer/MenuDrawer'
import LogoutDialog from '@/components/dialog/protected/authentication/LogoutDialog'

interface HeaderProps {
    view: (viewName: string) => void
    currentView: string
    userType: UserType | null | undefined
    authLoading: boolean
}

export default function Header({ view, currentView, userType, authLoading }: HeaderProps) {

    const [isMenuDrawerOpen, setIsMenuDrawerOpen] = React.useState<boolean>(false)
    const [isLogoutDialogOpen, setIsLogoutDialogOpen] = React.useState<boolean>(false)
    const navigate = useNavigate()
    const openMenuDrawer = () => setIsMenuDrawerOpen(true)
    const closeMenuDrawer = () => setIsMenuDrawerOpen(false)
    const openLogoutDialog = () => setIsLogoutDialogOpen(true)
    const closeLogoutDialog = () => setIsLogoutDialogOpen(false)

    return (
        <Box w='100%' h='3.7rem' p='.5rem' display='flex' alignItems='center' justifyContent='space-between'>
            {authLoading ? (
                <Box w='100%' h='100%' display={{ base: 'none', md: 'flex' }} alignItems='center' justifyContent='space-between'>
                    <Skeleton w='15rem' h='100%' borderRadius='xl' />
                    <Skeleton w='5rem' h='100%' borderRadius='xl' />
                </Box>
            ) : (
                <Box w='100%' h='100%' display={{ base: 'none', md: 'flex' }} alignItems='center' justifyContent='space-between'>
                    <Box bg='white' boxShadow='sm' onClick={() => navigate('/account')} h='100%' p='.4rem' display='flex' alignItems='center' cursor='pointer' borderRadius='xl' _hover={{ bg: 'teal', color: 'white', transition: '.3s' }} transition='.2s'>
                        <Avatar.Root w='1.7rem' h='100%'>
                            <Avatar.Image src='https://placehold.co/400x300/cccccc/969696.png?font=lato' />
                            <Avatar.Fallback name='Test Name' />
                        </Avatar.Root>
                        <Text m='0 .5rem' fontSize='.9rem' fontWeight='bold'>Test Account</Text>
                    </Box>
                    <Button onClick={openLogoutDialog} size='xs' colorPalette='red' fontSize='.7rem' fontWeight='bold' textTransform='uppercase' borderRadius='xl'>Log out</Button>
                </Box>
            )}

            <Box h='100%' display={{ base: 'flex', md: 'none' }}>
                <Image src='https://placehold.co/400x300/cccccc/969696.png?font=lato' alt='Logo' h='100%' />
            </Box>
            <Box display={{ base: 'flex', md: 'none' }}>
                <IconButton onClick={() => openMenuDrawer()} variant='ghost' borderRadius='xl'>
                    <BiMenu />
                </IconButton>
            </Box>

            {/* Drawer */}
            <MenuDrawer openDrawer={isMenuDrawerOpen} closeDrawer={closeMenuDrawer} view={view} currentView={currentView} userType={userType as UserType | null} authLoading={authLoading} />

            {/* Dialog */}
            <LogoutDialog openDialog={isLogoutDialogOpen} closeDialog={closeLogoutDialog} />
        </Box >
    )
}
