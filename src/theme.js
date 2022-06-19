import { createTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createTheme({
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
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: 14,
        fontWeight: 400,
      }
    },

    MuiChip: {
      colorSuccess: {
        backgroundColor: 'blue'
      }
    },

    MuiTextField: {
      root: {
        // backgroundColor: '#fff',
        // overflow: 'hidden',
        borderRadius: '10px',
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
          
          '& fieldset': {
            
            border: '1px solid #00000015',
          },
          '&:hover fieldset': {
            border: '1px solid #00000035',
          },
          '&.Mui-focused fieldset': {
            border: '1px solid #00000035',
          },
        },
        '& label': {
          color: '#b6b6b6'
        },
        "& .MuiInputBase-root": {
          // backgroundColor: "#fff"
        },
        '& .MuiOutlinedInput-input': {
          // backgroundColor: "#fff",
          borderRadius: '10px',
          overflow: 'hidden',
        },
        '& .MuiInputAdornment-root': {
          marginTop: '1px'
        }
      },
    },

    // Button
    MuiButton: {
      root: {
        textTransform: 'none',
        boxShadow: 'none',
        borderRadius: '10px',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        borderRadius: '10px',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        }
      },
      contained: {
        boxShadow: 'none',
        color: '#000000d0',
        backgroundColor: '#00000010',
        '&:hover': {
          backgroundColor: '#00000020',
          boxShadow: 'none'
        }
      },
      containedPrimary: {
        color: '#fff',
        backgroundColor: '#ff4605',
        '&:hover': {
          backgroundColor: `#F03E00`,
        }
      },
    },

    MuiInputBase: {
      root: {
        backgroundColor: '#fff',
        '& fieldset': {
          // backgroundColor: '#00000005',
          border: '1px solid #00000015',
        },
        '&:hover fieldset': {
          border: '1px solid #00000035',
        },
        '&.Mui-focused fieldset': {
          border: '1px solid #00000035',
        },
      }
    },

    MuiOutlinedInput: {
      root: {
        borderRadius: '10px',
        '&:hover .MuiOutlinedInput-notchedOutline': {
          border: '1px solid #00000035',
        },
      }
    },

    MuiInputLabel: {
      root: {
        color: '#b6b6b6'
      }
    },

    MuiMenu: {
      paper: {
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      },
    },

    MuiMenuItem: {
      root: {
        fontSize: 14,
        borderTop: '1px solid #00000008',
        '&:first-child': {
          borderTop: 'none'
        }
      }
    }
  },
});

export default theme;
