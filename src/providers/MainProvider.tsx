import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import type { MainProviderProps } from '../interfaces/MainProviderProps';

export const MainProvider: React.FC<MainProviderProps> = ({ children }) => {
    return(
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};