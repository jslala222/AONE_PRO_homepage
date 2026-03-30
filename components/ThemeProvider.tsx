'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// 3가지 테마 컨셉
export type ThemeName = 'classic-blue' | 'nature-green' | 'royal-purple'

interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  gradient: string[]
  background: string
  cardBg: string
  text: string
  textMuted: string
  border: string
  shadow: string
  glow: string
}

interface Theme {
  name: ThemeName
  label: string
  colors: ThemeColors
}

const themes: Record<ThemeName, Theme> = {
  'classic-blue': {
    name: 'classic-blue',
    label: '클래식 블루',
    colors: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#ec4899',
      gradient: ['#3b82f6', '#8b5cf6', '#ec4899'],
      background: '#ffffff',
      cardBg: 'rgba(255, 255, 255, 0.8)',
      text: '#111827',
      textMuted: '#6b7280',
      border: '#e5e7eb',
      shadow: 'rgba(59, 130, 246, 0.2)',
      glow: 'rgba(59, 130, 246, 0.4)',
    },
  },
  'nature-green': {
    name: 'nature-green',
    label: '내추럴 그린',
    colors: {
      primary: '#10b981',
      secondary: '#059669',
      accent: '#84cc16',
      gradient: ['#10b981', '#059669', '#84cc16'],
      background: '#f0fdf4',
      cardBg: 'rgba(255, 255, 255, 0.9)',
      text: '#14532d',
      textMuted: '#4b5563',
      border: '#d1fae5',
      shadow: 'rgba(16, 185, 129, 0.2)',
      glow: 'rgba(16, 185, 129, 0.4)',
    },
  },
  'royal-purple': {
    name: 'royal-purple',
    label: '로열 퍼플',
    colors: {
      primary: '#7c3aed',
      secondary: '#a855f7',
      accent: '#f59e0b',
      gradient: ['#7c3aed', '#a855f7', '#f59e0b'],
      background: '#faf5ff',
      cardBg: 'rgba(255, 255, 255, 0.95)',
      text: '#1e1b4b',
      textMuted: '#6b7280',
      border: '#e9d5ff',
      shadow: 'rgba(124, 58, 237, 0.2)',
      glow: 'rgba(124, 58, 237, 0.4)',
    },
  },
}

interface ThemeContextType {
  theme: Theme
  themeName: ThemeName
  setTheme: (name: ThemeName) => void
  themes: Record<ThemeName, Theme>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>('classic-blue')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // localStorage에서 저장된 테마 불러오기
    const savedTheme = localStorage.getItem('site-theme') as ThemeName | null
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      // 테마 변경 시 CSS 변수 업데이트
      const theme = themes[themeName]
      const root = document.documentElement
      
      root.style.setProperty('--theme-primary', theme.colors.primary)
      root.style.setProperty('--theme-secondary', theme.colors.secondary)
      root.style.setProperty('--theme-accent', theme.colors.accent)
      root.style.setProperty('--theme-gradient-start', theme.colors.gradient[0])
      root.style.setProperty('--theme-gradient-mid', theme.colors.gradient[1])
      root.style.setProperty('--theme-gradient-end', theme.colors.gradient[2])
      root.style.setProperty('--theme-background', theme.colors.background)
      root.style.setProperty('--theme-card-bg', theme.colors.cardBg)
      root.style.setProperty('--theme-text', theme.colors.text)
      root.style.setProperty('--theme-text-muted', theme.colors.textMuted)
      root.style.setProperty('--theme-border', theme.colors.border)
      root.style.setProperty('--theme-shadow', theme.colors.shadow)
      root.style.setProperty('--theme-glow', theme.colors.glow)
      
      // localStorage에 테마 저장
      localStorage.setItem('site-theme', themeName)
    }
  }, [themeName, mounted])

  const setTheme = (name: ThemeName) => {
    setThemeName(name)
  }

  const value = {
    theme: themes[themeName],
    themeName,
    setTheme,
    themes,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
