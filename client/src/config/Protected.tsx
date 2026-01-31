import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '@/config/AuthContext'
import { useAccountStatus } from '@/hooks/authentication/useAccountStatus'
import AccountApproval from '@/components/loading/AccountApproval'
import InterfaceLoading from '@/components/loading/InterfaceLoading'

const AUTH_DISABLED = false

const Protected = ({ children }: { children: React.JSX.Element }) => {
    const { isAuthenticated, loading } = React.useContext(AuthContext)
    const { status, loading: statusLoading } = useAccountStatus()

    if (AUTH_DISABLED) return children

    if (loading || statusLoading)
        return <InterfaceLoading />

    if (isAuthenticated && !status?.approved)
        return <AccountApproval />

    if (!isAuthenticated && !status?.authenticated)
        return <Navigate to="/login" replace />

    return children
}

export default Protected