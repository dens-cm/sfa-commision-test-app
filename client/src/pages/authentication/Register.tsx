import React from 'react'
import { Box, Button, Card, Field, Heading, HStack, Input, InputGroup, Separator, Text } from "@chakra-ui/react"
import { BiSolidEnvelope, BiSolidLock, BiSolidLockOpen } from "react-icons/bi"
import { useRegister } from '@/hooks/authentication/useRegister'
import { handleInputChange } from '@/utils/InputValidator'
import { toaster } from '@/components/ui/toaster'

export default function Register() {

    const [form, setForm] = React.useState({ email: '', password: '' })
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [errors, setErros] = React.useState<{ email?: string, password?: string, confirmPassword?: string }>({})
    const { register, loading } = useRegister()
    const inputChangeHandler = handleInputChange(setForm)

    const handleRegister = async () => {
        const newErrors: typeof errors = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!form.email || !emailRegex.test(form.email))
            newErrors.email = 'Please enter a valid email address.'

        if (!form.password) {
            newErrors.password = 'Password is required.'
        } else if (form.password.length <= 5) {
            newErrors.password = 'Password must be at least 6 characters long.'
        }

        if (!confirmPassword)
            newErrors.confirmPassword = 'Please confirm your password.'

        if (form.password && confirmPassword && form.password !== confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match.'

        setErros(newErrors)
        if (Object.keys(newErrors).length === 0) {
            try {
                await register(form)
            } catch (e: unknown) {
                toaster.create({ title: 'Failed', description: `${e}`, type: 'error', duration: 4000 })
            }
        }
    }

    return (
        <Box w='100%' h='100%' display='flex' alignItems='center' justifyContent='center'>
            <Card.Root w={{ base: '90%', xl: '30%', lg: '35%', md: '40%', sm: '60%' }} variant='elevated' borderRadius='xl'>
                <form onSubmit={(e) => { e.preventDefault(); handleRegister() }}>
                    <Card.Header>
                        <Heading fontSize='.9rem' fontWeight='bold' textTransform='uppercase'>Register</Heading>
                    </Card.Header>
                    <Card.Body gap='1rem'>
                        <Field.Root gap='.2rem' invalid={!!errors.email}>
                            <Field.Label fontSize='.9rem'>Email:</Field.Label>
                            <InputGroup flex='1' startElement={<BiSolidEnvelope />}>
                                <Input type='email' name='email' value={form.email} onChange={inputChangeHandler} size='sm' fontSize='.8rem' borderRadius='lg' placeholder="Enter your email address." />
                            </InputGroup>
                            {errors.email && (
                                <Field.ErrorText fontSize='.7rem'>{errors.email}</Field.ErrorText>
                            )}
                        </Field.Root>

                        <Field.Root gap='.2rem' invalid={!!errors.password}>
                            <Field.Label fontSize='.9rem'>Password:</Field.Label>
                            <InputGroup flex='1' startElement={<BiSolidLock />}>
                                <Input type='password' name='password' value={form.password} onChange={inputChangeHandler} size='sm' fontSize='.8rem' borderRadius='lg' placeholder="Enter your password." />
                            </InputGroup>
                            {errors.password && (
                                <Field.ErrorText fontSize='.7rem'>{errors.password}</Field.ErrorText>
                            )}
                        </Field.Root>

                        <Field.Root gap='.2rem' invalid={!!errors.confirmPassword}>
                            <Field.Label fontSize='.9rem'>Confirm Password:</Field.Label>
                            <InputGroup flex='1' startElement={<BiSolidLock />}>
                                <Input type='password' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} size='sm' fontSize='.8rem' borderRadius='lg' placeholder="Confirm your password." />
                            </InputGroup>
                            {errors.confirmPassword && (
                                <Field.ErrorText fontSize='.7rem'>{errors.confirmPassword}</Field.ErrorText>
                            )}
                        </Field.Root>
                    </Card.Body>
                    <Card.Footer flexDir='column'>
                        <Button type='submit' loading={loading} loadingText='Please wait...' w='100%' size='sm' colorPalette='teal' fontSize='.7rem' textTransform='uppercase' borderRadius='lg'><BiSolidLockOpen />Continue</Button>
                        <HStack w='100%' mt='.5rem'>
                            <Separator flex='1' />
                            <Text flexShrink='0' fontSize='.8rem'>Or</Text>
                            <Separator flex='1' />
                        </HStack>
                        <Text flexShrink='0' fontSize='.7rem' fontWeight='semibold' textTransform='uppercase'><a href='/login' style={{ color: 'blue' }}>Log in here</a></Text>
                    </Card.Footer>
                </form>
            </Card.Root>
        </Box>
    )
}
