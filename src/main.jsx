import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { MobileProvider } from './hook/MobileNav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MobileProvider>
        <App />
      </MobileProvider>
    </ThemeProvider>
  </StrictMode>,
)
