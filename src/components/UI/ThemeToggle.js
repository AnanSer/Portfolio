import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      className={styles['theme-toggle']}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className={`${styles['toggle-track']} ${isDark ? styles.dark : styles.light}`}>
        <div className={styles['toggle-thumb']}>
          {isDark ? (
            <Moon className={styles['toggle-icon']} size={16} />
          ) : (
            <Sun className={styles['toggle-icon']} size={16} />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
