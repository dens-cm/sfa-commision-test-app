import React from 'react'
import axios from 'axios'
import { AuthContext } from '@/config/AuthContext'
import api from '@/api/ApiRoutes'

export interface AccountStatus {
    authenticated: boolean
    approved: boolean
    email?: string
    userType?: number
}

const AUTH_DISABLED = true

export const useAccountStatus = () => {
    const { accToken, loading: authLoading } = React.useContext(AuthContext)
    const [status, setStatus] = React.useState<AccountStatus | null>(null)
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        if (AUTH_DISABLED) {
            setStatus({
                authenticated: true,
                approved: true,
                userType: 4
            })
            setLoading(false)
            return
        }

        if (!accToken) {
            setStatus({ authenticated: false, approved: false })
            setLoading(false)
            return
        }

        const fetchStatus = async () => {
            try {
                const response = await axios.get(api.routes.accountstatus, { headers: { Authorization: `Bearer ${accToken}` } })
                setStatus(response.data)
            } catch {
                setStatus({ authenticated: false, approved: false })
            } finally {
                setLoading(false)
            }
        }

        fetchStatus()
    }, [accToken])

    return { status, loading: loading || authLoading, refreshStatus: () => { } }
}