import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored
      return document.body.classList.contains('light') ? 'light' : 'dark'
    } catch (e) {
      return 'dark'
    }
  })

  useEffect(() => {
    try {
      if (theme === 'light') {
        document.body.classList.add('light')
        localStorage.setItem('theme', 'light')
      } else {
        document.body.classList.remove('light')
        localStorage.setItem('theme', 'dark')
      }
    } catch (e) {
      // noop
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  )
}
