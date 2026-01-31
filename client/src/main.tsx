import { Provider } from "@/components/ui/provider"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "@/components/ui/toaster"
import Routes from '@/routes/Routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Toaster />
      <Routes />
    </Provider>
  </StrictMode>
)
