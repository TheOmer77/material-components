import React, { useEffect, useState } from 'react';

// Components
import { ThemeProvider } from '@rmwc/theme';

const themeColors = (darkTheme) => ({
  primary: darkTheme ? '#9eacfa' : '#0055f2',
  secondary: darkTheme ? '#f3c72a' : '#f29d00',
  error: darkTheme ? '#a90000' : '#e40c0c',
  background: darkTheme ? '#121212' : '#fff',
  surface: darkTheme ? '#1e1e1e' : '#fff',
  onPrimary: `rgba(${darkTheme ? '0, 0, 0' : '255, 255, 255'}, 1)`,
  onSecondary: `rgba(0, 0, 0, 0.87)`,
  onSurface: `rgba(${darkTheme ? '255, 255, 255' : '0, 0, 0'}, 0.87)`,
  onError: '#fff',
  // textPrimaryOnBackground: `rgba(${
  //   darkTheme ? '255, 255, 255' : '0, 0, 0'
  // }, 0.87)`,
  // textSecondaryOnBackground: `rgba(${
  //   darkTheme ? '255, 255, 255' : '0, 0, 0'
  // }, 0.54)`,
  // textHintOnBackground: `rgba(${
  //   darkTheme ? '255, 255, 255' : '0, 0, 0'
  // }, 0.38)`,
  // textDisabledOnBackground: `rgba(${
  //   darkTheme ? '255, 255, 255' : '0, 0, 0'
  // }, 0.38)`,
  // textIconOnBackground: `rgba(${
  //   darkTheme ? '255, 255, 255' : '0, 0, 0'
  // }, 0.38)`,
  // textPrimaryOnLight: 'rgba(0, 0, 0, 0.87)',
  // textSecondaryOnLight: 'rgba(0, 0, 0, 0.54)',
  // textHintOnLight: 'rgba(0, 0, 0, 0.38)',
  // textDisabledOnLight: 'rgba(0, 0, 0, 0.38)',
  // textIconOnLight: 'rgba(0, 0, 0, 0.38)',
  // textPrimaryOnDark: 'white',
  // textSecondaryOnDark: 'rgba(255, 255, 255, 0.7)',
  // textHintOnDark: 'rgba(255, 255, 255, 0.5)',
  // textDisabledOnDark: 'rgba(255, 255, 255, 0.5)',
  // textIconOnDark: 'rgba(255, 255, 255, 0.5)',
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
