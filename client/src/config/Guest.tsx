import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '@/config/AuthContext'
import InterfaceLoading from '@/components/loading/InterfaceLoading'

const AUTH_DISABLED = true

const GuestRoute = ({ children }: { children: React.JSX.Element }) => {
    const { isAuthenticated, loading } = React.useContext(AuthContext)

    if (AUTH_DISABLED) return children

    if (loading)
        return <InterfaceLoading />

    // Redirect to dashboard if logged in
    if (isAuthenticated)
        return <Navigate to="/dashboard" replace />

    return children
}

export default GuestRoute