import type { Theme } from '../types/Theme';

export interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}