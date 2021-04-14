import React, { useEffect, useState } from 'react';

// Components
import { ThemeProvider } from '@rmwc/theme';

const themeColors = (darkTheme) => ({
  primary: darkTheme ? '#0027be' : '#004ef2',
  secondary: darkTheme ? '#b74e00' : '#f07c00',
  error: '#f20000',
  background: darkTheme ? '#111' : '#fff',
  surface: darkTheme ? '#222' : '#fff',
  onPrimary: 'rgba(255, 255, 255, 1)',
  onSecondary: `rgba(${darkTheme ? '255, 255, 255' : '0, 0, 0'}, 0.87)`,
  onSurface: `rgba(${darkTheme ? '255, 255, 255' : '0, 0, 0'}, 0.87)`,
  onError: '#fff',
  textPrimaryOnBackground: `rgba(${
    darkTheme ? '255, 255, 255' : '0, 0, 0'
  }, 0.87)`,
  textSecondaryOnBackground: `rgba(${
    darkTheme ? '255, 255, 255' : '0, 0, 0'
  }, 0.54)`,
  textHintOnBackground: `rgba(${
    darkTheme ? '255, 255, 255' : '0, 0, 0'
  }, 0.38)`,
  textDisabledOnBackground: `rgba(${
    darkTheme ? '255, 255, 255' : '0, 0, 0'
  }, 0.38)`,
  textIconOnBackground: `rgba(${
    darkTheme ? '255, 255, 255' : '0, 0, 0'
  }, 0.38)`,
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
});

const Theme = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    /** @param {MediaQueryListEvent} e */
    const onDarkThemeChange = (e) => setDarkTheme(e.matches);

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onDarkThemeChange);
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', onDarkThemeChange);
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = themeColors(darkTheme).background;
    document.body.style.color = themeColors(darkTheme).onSurface;
  }, [darkTheme]);

  return (
    <ThemeProvider options={themeColors(darkTheme)}>{children}</ThemeProvider>
  );
};

export default Theme;
