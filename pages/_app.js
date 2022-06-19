import axios from 'axios'
import '../styles/globals.css'
import '../styles/calendar.css';
import moment from 'moment';

// import theme from '../src/theme'
import themev5 from '../src/themev5';
// import { ThemeProvider, StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import { ThemeProvider as ThemeProvider5 } from '@mui/material/styles';


axios.interceptors.request.use((config) => {
  if (!config.headers['x-test']) {
    console.log(`testtest`)
    config.url = `/api/proxy?url=${encodeURIComponent(config.url)}`
  }
    return config;
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider5 theme={themev5}>
      {/* <ThemeProvider theme={theme}> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" />
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </ThemeProvider5>
  )
}

export default MyApp
