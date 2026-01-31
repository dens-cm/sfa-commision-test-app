import React from 'react'
import axios from 'axios'
import api from '@/api/ApiRoutes'

interface AuthContextType {
    accToken: string | null
    loading: boolean
    isAuthenticated: boolean
    login: (token: string) => void
    logout: () => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = React.createContext<AuthContextType>({
    accToken: null,
    loading: false,
    isAuthenticated: false,
    login: () => { },
    logout: () => { }
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [accToken, setAccToken] = React.useState<string | null>(null)
    const [loading, setLoading] = React.useState<boolean>(true)
    const login = (token: string) => { setAccToken(token) }
    const logout = () => { setAccToken(null); axios.post(api.routes.logout, {}, { withCredentials: true }) }

    React.useEffect(() => {
        const refresh = async () => {
            try {
                const response = await axios.post(api.routes.refresh, {}, { withCredentials: true })
                setAccToken(response.data.accessToken)
            } catch {
                setAccToken(null)
            } finally {
                setLoading(false)
            }
        }

        refresh()
    }, [])

    return (
        <AuthContext.Provider value={{ accToken, isAuthenticated: !!accToken, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}