// import React from 'react'
import { Button, CloseButton, Dialog, Heading, Portal, Text } from "@chakra-ui/react"
import { useLogout } from "@/hooks/authentication/useLogout"

type LogoutDialogProps = {
    openDialog: boolean
    closeDialog: () => void
}
export default function LogoutDialog({ openDialog, closeDialog }: LogoutDialogProps) {

    const { handleLogout, loading } = useLogout()

    return (
        <Dialog.Root open={openDialog} onOpenChange={closeDialog} size='xs' role="alertdialog">
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content p='0 1rem' borderRadius='xl'>
                        <Dialog.Header p='.7rem 0'>
                            <Heading fontSize='.8rem' fontWeight='bold' textTransform='uppercase'>Log out</Heading>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size='sm' borderRadius='lg' />
                            </Dialog.CloseTrigger>
                        </Dialog.Header>
                        <hr />
                        <Dialog.Body p='1.3rem 0'>
                            <Text fontSize='.9rem'>Are you sure you want to log out?</Text>
                        </Dialog.Body>
                        <hr />
                        <Dialog.Footer p='.9rem 0' gap='.5rem'>
                            <Button onClick={handleLogout} loading={loading} loadingText='please wait...' variant='subtle' size='xs' fontSize='.7rem' textTransform='uppercase' borderRadius='lg'>Confirm</Button>
                            <Button onClick={closeDialog} size='xs' fontSize='.7rem' textTransform='uppercase' borderRadius='lg'>cancel</Button>
                        </Dialog.Footer>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}
