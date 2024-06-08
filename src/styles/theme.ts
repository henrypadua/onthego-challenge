/* eslint-disable camelcase */
import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { Public_Sans } from 'next/font/google'

export const publicSans = Public_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5D55',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: publicSans.style.fontFamily,
    h1: {
      fontSize: '1.875rem',
      lineHeight: '2.25rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h2: {
      fontSize: '1.375rem',
      lineHeight: '1.616rem',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    h6: {
      fontSize: '1.125rem',
      lineHeight: '1.322rem',
      fontWeight: 400,
      color: '#8A9099',
    },
    subtitle1: {
      fontSize: '0.875rem',
      lineHeight: '2.203rem',
      fontWeight: 500,
      color: '#FFFFFF',
    },
    subtitle2: {
      fontSize: '0.875rem',
      lineHeight: '1.028rem',
      fontWeight: 500,
      color: '#8A9099',
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: '1.028rem',
      fontWeight: 400,
      color: '#FFFFFF',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: '1.028rem',
      fontWeight: 400,
      color: '#8A9099',
    },
    caption: {
      fontSize: '0.625rem',
      lineHeight: '0.734rem',
      fontWeight: 400,
      color: '#FFFFFF',
    },
    overline: {
      fontSize: '0.75rem',
      lineHeight: '0.881rem',
      fontWeight: 700,
      color: '#000000',
    },
  },
})

export default theme
