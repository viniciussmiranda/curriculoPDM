import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const Colors = {
  // Paleta principal
  cream: '#f7e7bd',
  blue: '#315a7b',
  // Derivadas
  creamDark: '#e8d09e',
  creamLight: '#fdf4e3',
  blueDark: '#1e3d57',
  blueLight: '#4a7fa8',
  // Neutros
  white: '#ffffff',
  black: '#0a0a0a',
  gray: '#6b7280',
  grayLight: '#f3f4f6',
  grayDark: '#374151',
};

export const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: Colors.blue,
    secondary: Colors.cream,
    background: Colors.creamLight,
    surface: Colors.white,
    onPrimary: Colors.white,
    onSecondary: Colors.blue,
    onBackground: Colors.black,
    onSurface: Colors.black,
    elevation: {
      level0: 'transparent',
      level1: Colors.white,
      level2: Colors.white,
      level3: Colors.white,
      level4: Colors.white,
      level5: Colors.white,
    },
  },
};

export const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: Colors.cream,
    secondary: Colors.blue,
    background: '#0d1b2a',
    surface: '#1a2f42',
    onPrimary: Colors.blue,
    onSecondary: Colors.cream,
    onBackground: Colors.cream,
    onSurface: Colors.cream,
    elevation: {
      level0: 'transparent',
      level1: '#1a2f42',
      level2: '#1e3649',
      level3: '#223d52',
      level4: '#244055',
      level5: '#284760',
    },
  },
};
