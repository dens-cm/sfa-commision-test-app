import React from 'react'
import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@/config/AuthContext'
import Protected from '@/config/Protected'
import Guest from '@/config/Guest'

// Authentication Routes
import Login from '@/pages/authentication/Login'
import Register from '@/pages/authentication/Register'

// Protected Container Routes
import Contents from '@/components/container/Contents'

// Public Routes
import App from '@/pages/public/App'

export default function Main(): React.JSX.Element {
  return (
    <Box w='100vw' h='100vh'>
        <Router>
          <Routes>

            {/* Guest Routes */}
            <Route path='/login' element={<AuthProvider><Guest><Login /></Guest></AuthProvider>}/>
            <Route path='/register' element={<AuthProvider><Guest><Register /></Guest></AuthProvider>} />

            {/* Protected Container Route */}
            <Route path='/*' element={<AuthProvider><Protected><Contents /></Protected></AuthProvider>}/>

            {/* Public Route */}
            <Route path='/' element={<App />} />

          </Routes>
        </Router>
    </Box>
  )
}