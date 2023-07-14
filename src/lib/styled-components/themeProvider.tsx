'use client';

import React, { type PropsWithChildren } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

export const theme = {
  colors: {
    darkNeutral: '#8f90a6',
    darkPrimary: '#0a0a0a',
    darkSecondary: '#262626',
    darkStain: '#555770',
    lightNeutral: '#fafafc',
    lightPrimary: '#ffffff',
    lightSecondary: '#C8C9D9',
    lightStain: '#f2f2f5',
    lightTertiary: '#949494',
    primaryNeutral: '#003299',
    primaryPrimary: '#0A68F4',
    primarySecondary: '#004fc4',
    primaryStain: '#4481ff',
  },
  spacing: {
    l: 24,
    m: 16,
    none: 0,
    s: 12,
    xl: 32,
    xs: 8,
    xxl: 50,
    xxs: 6,
    xxxl: 64,
    xxxs: 4,
  },
};

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyledThemeProvider theme={theme}>
      <Reset />
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
