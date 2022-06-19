import { createTheme } from '@mui/material/styles';

const themev5 = createTheme({
  palette: {
    primary: {
      main: '#ff4605',
      light: '#FFE8E0',//'#FFD9CC',
      dark: '#CC3500',
    },
    secondary: {
      main: '#2B2F3A',
    },
    default: {
      // main: '#989898',
      main: 'red',
    },
    success: {
      main: '#1F7A1F',
      dark: '#ADEBAD',
      light: '#D6F5D6',
    },
    error: {
      main: '#EC4662',
      dark: '#FFD6DF',
      light: '#FFEBEF',
    },
    gray: {
      light: '#EFF3FA',
      main: '#00000080',
    }
  },
  typography: {
    fontFamily: 'Roboto, Tahoma, sans-serif',
    allVariants: {
      color: '#222732'
    },
    h1: {
      fontWeight: 900,
    },
    h2: {
      fontWeight: 900,
    },
    h3: {
      fontWeight: 900,
    },
    h4: {
      fontWeight: 900,
    },
    h5: {
      fontWeight: 900,
    },
    h6: {
      fontWeight: 700,
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: '3rem',
          marginBottom: '3rem',
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 36,
        },
      }
    },

    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 32,
          minWidth: 64,
        }
      },
      defaultProps: {
        disableRipple: true,
      }
    },

    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '10px',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          '&:hover': {
            boxShadow: 'none',
          },
          "&.Mui-focusVisible": {
            "boxShadow": "none"
          },
        },
        sizeLarge: {
          fontSize: '16px',
          padding: '.75rem 1.5rem',
        },
        containedSecondary: {
          backgroundColor: '#eaeaea',
          color: '#222732',
          '&:hover': {
            backgroundColor: '#DBDBDB',
          }
        },
      }
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          // paddingLeft: 20,
        },
      },
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 48,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& label': {
            color: '#b6b6b6'
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          '& fieldset': {
            // backgroundColor: '#00000005',
            
            border: '1px solid #00000015',
          },
          '&:hover [class$=-notchedOutline]': {
            borderColor: '#00000035',
          },
          '&.Mui-focused [class$=-notchedOutline]': {
            border: '1px solid #00000035',
          },
          '&.Mui-disabled [class$=-notchedOutline]': {
            border: '1px solid #00000015',
          },
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#fafafa',
        },
        colorSecondary: {
          backgroundColor: '#fff',
        }
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#b6b6b6',
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: '#b6b6b6',
        },
      },
    },

    MuiFormControl: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: '#00000025',
          }
        }
      },
    },

    MuiAutocomplete: {
      styleOverrides: {

      },
    },

  },
});

export default themev5;
