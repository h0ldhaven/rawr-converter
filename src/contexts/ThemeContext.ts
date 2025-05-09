import { createContext } from 'react';
import type { ThemeContextProps } from '../interfaces/ThemeContextProps';

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);