import { useState, useEffect } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // On mount, check the user's saved preference or default to light
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark')
      document.documentElement.classList.add(savedTheme)
    } else {
      document.documentElement.classList.add('light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <button
      className='p-2 rounded-full transition hover:bg-violet-200 dark:hover:bg-violet-500 text-lg'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </button>
  )
}
