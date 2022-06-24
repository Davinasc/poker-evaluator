import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: { main: '#000000' },
  },
});
theme = createTheme(theme, {
  components: {
    MuiButtonBase: {
      defaultProps: { disableRipple: true, disableTouchRipple: true },
      styleOverrides: {
        root: { textTransform: 'none' },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        color: 'inherit',
      },
      styleOverrides: {
        root: {
          fontStyle: 'normal',
          lineHeight: 1.5,
          fontWeight: 400,
          textTransform: 'none',
          borderRadius: 36,
        },

        containedPrimary: {
          backgroundColor: theme.palette.primary.main,
          border: 'none',
          color: theme.palette.primary.contrastText,
        },

        sizeMedium: {
          padding: 12,
          height: 40,
          fontSize: 16,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: 18,
          fontWeight: 'bold',
          opacity: 0.65,

          flex: 1,
          minWidth: 0,
          paddingLeft: 8,
          paddingRight: 8,

          '&.Mui-selected': { opacity: 1 },
        },
      },
    },
  },
});

export default responsiveFontSizes(theme);
