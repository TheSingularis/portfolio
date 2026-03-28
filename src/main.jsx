import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Theme initialization: respect localStorage override, then OS preference via
// `prefers-color-scheme`. Adds `light` class to `document.body` when light is desired.
;(function initTheme() {
  try {
    const stored = localStorage.getItem('theme'); // 'light' | 'dark' | null
    if (stored === 'light') {
      document.body.classList.add('light')
      return
    }
    if (stored === 'dark') {
      document.body.classList.remove('light')
      return
    }

    // No stored preference — use OS preference
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    if (mq.matches) {
      document.body.classList.add('light')
    } else {
      document.body.classList.remove('light')
    }

    // Listen for changes and update class (won't overwrite localStorage)
    mq.addEventListener?.('change', (e) => {
      const storedNow = localStorage.getItem('theme')
      if (storedNow) return
      if (e.matches) document.body.classList.add('light')
      else document.body.classList.remove('light')
    })
  } catch (err) {
    // ignore — fall back to default CSS
    // console.warn('Theme init failed', err)
  }
})()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
