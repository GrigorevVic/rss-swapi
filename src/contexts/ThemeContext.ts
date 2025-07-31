import { createContext } from 'react';

interface IThrmeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<IThrmeContext | undefined>(undefined);
