module.exports = {
  PORT: 3006,
  theme: {
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: { main: '#4384f5' },
      secondary: { main: '#3a343c' },
      error: {
        main: '#d32f2f',
        dark: '#efa842'
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          'input[type=number]': {
            '-moz-appearance': 'textfield',
          },
          'input::-webkit-outer-spin-button,input::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          'body': {
            padding: '20px',
          },
          'html .MuiOutlinedInput-root': {
            borderRadius: 0,
          },
          'html .MuiFormHelperText-root': {
            position: 'absolute',
            top: '100%',
            margin: 0,
            width: '100%',
            textAlign: 'center',
          },
        },
      },
    },
  },
};
