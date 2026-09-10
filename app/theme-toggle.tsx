'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
  }, []);
  function toggle() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    setDark(next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* Theme still works when storage is unavailable. */ }
  }
  return <button className="dock-item theme-toggle" onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={dark}>
    {dark ? <Sun size={20} strokeWidth={1.7} /> : <Moon size={20} strokeWidth={1.7} />}
    <span className="tooltip">{dark ? 'Light mode' : 'Dark mode'}</span>
  </button>;
}
