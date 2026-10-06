import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '@/types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'portfolio-theme-preference';

// Lag-free instant DOM application with transition suppression
const applyThemeToDOM = (newTheme: Theme) => {
  if (typeof window === 'undefined') return;

  const root = document.documentElement;

  // Temporarily suppress transitions on general layout to eliminate theme toggle stutter
  // The theme toggle icon is explicitly excluded so its rotation animates smoothly
  const styleEl = document.createElement('style');
  styleEl.appendChild(
    document.createTextNode(
      `*:not(.theme-toggle-icon, .theme-toggle-icon *), *::before, *::after {
        -webkit-transition: none !important;
        -moz-transition: none !important;
        -o-transition: none !important;
        -ms-transition: none !important;
        transition: none !important;
      }`
    )
  );
  document.head.appendChild(styleEl);

  // Synchronously update classes immediately
  if (newTheme === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
  } else {
    root.classList.add('light');
    root.classList.remove('dark');
  }
  root.style.colorScheme = newTheme;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  } catch {
    // Ignore storage quota or security errors
  }

  // Force synchronous style recalculation
  window.getComputedStyle(root).opacity;

  // Re-enable transitions on the next frame for normal UI hover/focus interactions
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (document.head.contains(styleEl)) {
        document.head.removeChild(styleEl);
      }
    });
  });
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('portfolio-theme'); // Clean stale legacy key
        const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
        if (stored === 'light' || stored === 'dark') {
          return stored;
        }
      } catch {}
    }
    // Strict default is dark
    return 'dark';
  });

  // Ensure DOM is in sync on mount
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    root.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    applyThemeToDOM(nextTheme);
    setThemeState(nextTheme);
  };

  const setTheme = (newTheme: Theme) => {
    applyThemeToDOM(newTheme);
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
