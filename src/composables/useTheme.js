import { ref } from 'vue'

// Called immediately — sets class on <html> and returns current state
function initTheme() {
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const dark = saved === 'dark' || (!saved && prefersDark)
  document.documentElement.classList.toggle('dark', dark)
  return dark
}

const isDark = ref(initTheme())

export function useTheme() {
  function toggle() {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }
  return { isDark, toggle }
}
