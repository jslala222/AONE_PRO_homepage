'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme, type ThemeName } from './ThemeProvider'
import { Palette, Check } from 'lucide-react'
import { useState } from 'react'

const themeIcons: Record<ThemeName, JSX.Element> = {
  'classic-blue': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#3b82f6" />
      <circle cx="8" cy="10" r="3" fill="#60a5fa" />
      <circle cx="14" cy="10" r="3" fill="#60a5fa" />
      <circle cx="12" cy="15" r="3" fill="#60a5fa" />
    </svg>
  ),
  'nature-green': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#10b981" />
      <circle cx="8" cy="10" r="3" fill="#34d399" />
      <circle cx="14" cy="10" r="3" fill="#34d399" />
      <circle cx="12" cy="15" r="3" fill="#34d399" />
    </svg>
  ),
  'royal-purple': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#7c3aed" />
      <circle cx="8" cy="10" r="3" fill="#a855f7" />
      <circle cx="14" cy="10" r="3" fill="#a855f7" />
      <circle cx="12" cy="15" r="3" fill="#f59e0b" />
    </svg>
  ),
}

export default function ThemeSelector() {
  const { theme, themeName, setTheme, themes } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const themeList = Object.values(themes)

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <Palette className="w-4 h-4" style={{ color: theme.colors.primary }} />
        <span className="text-sm font-medium text-gray-700 hidden sm:inline">
          {theme.label}
        </span>
        <div className="flex gap-1">
          {themeList.map((t) => (
            <div
              key={t.name}
              className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: t.colors.primary }}
            />
          ))}
        </div>
      </button>

      {/* Theme Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
            >
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  테마 선택
                </h3>
                <div className="space-y-2">
                  {themeList.map((t) => (
                    <button
                      key={t.name}
                      onClick={() => {
                        setTheme(t.name)
                        setIsOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                        themeName === t.name
                          ? 'bg-gray-50 ring-2 ring-offset-2'
                          : 'hover:bg-gray-50'
                      }`}
                      style={{
                        ringColor: themeName === t.name ? t.colors.primary : undefined,
                      }}
                    >
                      {/* Color Preview */}
                      <div className="flex gap-1">
                        {t.colors.gradient.map((color, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                      
                      {/* Label */}
                      <span
                        className={`flex-1 text-left font-medium ${
                          themeName === t.name ? 'text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        {t.label}
                      </span>
                      
                      {/* Selected Check */}
                      {themeName === t.name && (
                        <Check
                          className="w-5 h-5"
                          style={{ color: t.colors.primary }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview Bar */}
              <div
                className="h-2"
                style={{
                  background: `linear-gradient(to right, ${themes['classic-blue'].colors.primary}, ${themes['nature-green'].colors.primary}, ${themes['royal-purple'].colors.primary})`,
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
