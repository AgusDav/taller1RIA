import { createTheme } from '@mui/material';

export const getAppTheme = (mode) => {
  return createTheme({
    palette: {
      mode: mode ? 'dark' : 'light',
      primary: {
        // Un tono de púrpura vibrante
        main: mode ? '#BB86FC' : '#6200EE',
        light: mode ? '#CBB2FE' : '#985EFF',
        dark: mode ? '#9A66EC' : '#3700B3',
        contrastText: '#FFFFFF',
      },
      secondary: {
        // Un tono coral/naranja
        main: mode ? '#FF9E80' : '#FF5722',
        light: mode ? '#FFB74D' : '#FF8A50',
        dark: mode ? '#F57C00' : '#D84315',
        contrastText: '#000000',
      },
      background: {
        default: mode ? '#121212' : '#FAFAFA',
        paper: mode ? '#1E1E1E' : '#FFFFFF',
      },
      text: {
        primary: mode ? '#E1E1E1' : '#212121',
        secondary: mode ? '#AAAAAA' : '#757575',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h5: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 12px 20px -10px rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.12), 0 7px 8px -5px rgba(0,0,0,0.1)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 10px -4px rgba(0,0,0,0.2)',
            },
            '&:active': {
              transform: 'translateY(1px)',
            },
          },
          contained: {
            boxShadow: '0 3px 5px -1px rgba(0,0,0,0.1), 0 6px 10px 0 rgba(0,0,0,0.04), 0 1px 18px 0 rgba(0,0,0,0.02)',
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: {
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          elevation1: {
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          },
          elevation2: {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            transition: 'background-color 0.2s, transform 0.2s',
            '&:hover': {
              transform: 'translateX(4px)',
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          },
        },
      },
    },
  });
};
