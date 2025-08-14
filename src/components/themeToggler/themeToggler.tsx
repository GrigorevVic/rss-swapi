'use client';

import './styles.css';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggler = () => {
  const { toggleTheme } = useTheme();

  const handlerThemeToggler = (): void => {
    toggleTheme();
  };

  return (
    <div className={'theme-button'}>
      <button className="toggler" onClick={handlerThemeToggler}></button>
    </div>
  );
};
