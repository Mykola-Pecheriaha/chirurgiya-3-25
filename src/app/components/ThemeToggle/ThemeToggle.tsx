'use client';
import { useTheme } from '../ThemeProvider';
import { Sun, Moon, Monitor } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={styles.themeToggle}>
      <button
        onClick={() => setTheme('light')}
        className={`${styles.themeButton} ${theme === 'light' ? styles.active : ''}`}
        aria-label="Світла тема"
      >
        <Sun size={18} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`${styles.themeButton} ${theme === 'dark' ? styles.active : ''}`}
        aria-label="Темна тема"
      >
        <Moon size={18} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`${styles.themeButton} ${theme === 'system' ? styles.active : ''}`}
        aria-label="Системна тема"
      >
        <Monitor size={18} />
      </button>
    </div>
  );
}
