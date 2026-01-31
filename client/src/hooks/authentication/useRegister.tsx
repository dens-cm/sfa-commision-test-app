import React from 'react'
import axios from 'axios'
import api from '@/api/ApiRoutes'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/config/AuthContext'
import { toaster } from '@/components/ui/toaster'

interface RegisterData {
    email: string,
    password: string
}

export const useRegister = () => {
    const { login: setAuthToken } = React.useContext(AuthContext)
    const [loading, setLoading] = React.useState<boolean>(false)
    const navigate = useNavigate()

    const register = async (form: RegisterData) => {
        setLoading(true)

        try {
            const response = await axios.post(api.routes.register, form, { withCredentials: true })
            setAuthToken(response.data.accessToken)
            setLoading(false)
            navigate('/dashboard')

            toaster.create({ title: 'Success', description: `${response.data.message}`, type: 'success', duration: 4000 })
        } catch (e: unknown) {
            setLoading(false)

            if (axios.isAxiosError(e) && e.response?.data) {
                const msg = (e.response.data as { message?: string }).message
                toaster.create({ title: 'Failed', description: `${msg}`, type: 'error', duration: 4000 })
            } else {
                toaster.create({ title: 'Failed', description: `Network error. Try again.`, type: 'error', duration: 4000 })
            }
        }
    }

    return { register, loading }
}