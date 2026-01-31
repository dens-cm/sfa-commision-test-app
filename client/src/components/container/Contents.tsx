// import React from 'react'
import { Box } from '@chakra-ui/react'
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom'
import { useAccountStatus } from '@/hooks/authentication/useAccountStatus'
import { type UserType } from '@/utils/auth/UserTypes'

import Navbar from '@/components/container/Navbar'
import Header from '@/components/container/Header'

// Pages
import Dashboard from '@/pages/protected/Dashboard'
import Incentives from '@/pages/protected/Incentives'

// Admin Pages
import AdminDashboard from '@/pages/protected/admin/Dashboard'

export default function Contents() {

    const navigate = useNavigate()
    const location = useLocation()
    const { status, loading: authLoading } = useAccountStatus()

    // View Management
    const currentView = location.pathname.split('/')[1] || 'dashboard'
    const handleSetView = (viewName: string) => { navigate(`/${viewName}`) }

    return (
        <Box w='100%' h='100%' overflow='auto'>
            <Box w='100%' h='100%' display='flex'>
                <Navbar view={handleSetView} currentView={currentView} userType={status?.userType as UserType | null} authLoading={authLoading} />
                <Box w='100%' h='100%' display='flex' flexDirection='column' overflow='auto'>
                    <Header view={handleSetView} currentView={currentView} userType={status?.userType as UserType | null} authLoading={authLoading} />
                    <Box m='0 .5rem'><hr /></Box>
                    <Box w='100%' h='100%' p='.5rem 0' overflow='auto'>
                        <Routes>
                            <Route path='/*' element={<Navigate to='/dashboard' />} />
                            <Route path='dashboard' element={<Dashboard />} />
                            <Route path='admin-dashboard' element={<AdminDashboard />} />
                            <Route path='incentives' element={<Incentives />} />
                        </Routes>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
