import React from 'react';
import { Search } from 'lucide-react';
import styles from './CommandPaletteButton.module.css';

const CommandPaletteButton = ({ onClick }) => {
  return (
    <button
      className={styles.floatingButton}
      onClick={onClick}
      aria-label="Open command palette"
      title="Open command palette (Ctrl+K)"
      data-cursor="pointer"
    >
      <Search size={20} strokeWidth={2.5} />
      <span className={styles.kbd}>⌘K</span>
    </button>
  );
};

export default CommandPaletteButton;
