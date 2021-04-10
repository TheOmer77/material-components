import React from 'react';

// Components
import { ThemeProvider } from '@rmwc/theme';

const Theme = ({ children }) => (
  <ThemeProvider
    options={{
      primary: '#004ef2',
      secondary: '#f07c00',
      error: '#f20000',
      background: '#fff',
      surface: '#fff',
      onPrimary: 'rgba(255, 255, 255, 1)',
      onSecondary: 'rgba(0, 0, 0, 0.87)',
      onSurface: 'rgba(0, 0, 0, 0.87)',
      onError: '#fff',
      textPrimaryOnBackground: 'rgba(0, 0, 0, 0.87)',
      textSecondaryOnBackground: 'rgba(0, 0, 0, 0.54)',
      textHintOnBackground: 'rgba(0, 0, 0, 0.38)',
      textDisabledOnBackground: 'rgba(0, 0, 0, 0.38)',
      textIconOnBackground: 'rgba(0, 0, 0, 0.38)',
      textPrimaryOnLight: 'rgba(0, 0, 0, 0.87)',
      textSecondaryOnLight: 'rgba(0, 0, 0, 0.54)',
      textHintOnLight: 'rgba(0, 0, 0, 0.38)',
      textDisabledOnLight: 'rgba(0, 0, 0, 0.38)',
      textIconOnLight: 'rgba(0, 0, 0, 0.38)',
      textPrimaryOnDark: 'white',
      textSecondaryOnDark: 'rgba(255, 255, 255, 0.7)',
      textHintOnDark: 'rgba(255, 255, 255, 0.5)',
      textDisabledOnDark: 'rgba(255, 255, 255, 0.5)',
      textIconOnDark: 'rgba(255, 255, 255, 0.5)',
    }}
  >
    {children}
  </ThemeProvider>
);

export default Theme;
