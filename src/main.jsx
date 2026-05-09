import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ViewerProvider } from './context/ViewerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViewerProvider>
      <App />
    </ViewerProvider>
  </StrictMode>,
)
