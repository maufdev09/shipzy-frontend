import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Provider } from 'react-redux'

import { router } from './routes/index.tsx'
import { ThemeProvider } from './Provider/theme-provider.tsx'
import { store } from './redux/store.ts'
import { Toaster } from './components/ui/sonner.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
    <RouterProvider router={router}/>
            <Toaster richColors />

    </ThemeProvider>
    </Provider>

  </StrictMode>,
)
