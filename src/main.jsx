// Import StrictMode - a development tool to highlight potential problems
import { StrictMode } from 'react'

// Import createRoot - the new API for rendering React apps (introduced in React 18)
import { createRoot } from 'react-dom/client'

// Import your main App component
import App from './App.jsx'

// The actual rendering process:
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
