import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/config/AuthContext'
import api from '@/api/ApiRoutes'
import axios from 'axios'
import { toaster } from '@/components/ui/toaster'

export const useLogout = () => {
    const { logout } = React.useContext(AuthContext)
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()

    const handleLogout = async () => {
        setLoading(true)
        try {
            const response = await axios.post(api.routes.logout, {}, { withCredentials: true })
            logout()

            toaster.create({ title: 'Success', description: `${response.data.message}`, type: 'success', duration: 4000 })
            navigate('/', { replace: true })
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

    return { handleLogout, loading }
}