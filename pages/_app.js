import axios from 'axios'
import '../styles/globals.css'
import '../styles/calendar.css';
import moment from 'moment';

axios.interceptors.request.use((config) => {
  if (!config.headers['x-test']) {
    console.log(`testtest`)
    config.url = `/api/proxy?url=${encodeURIComponent(config.url)}`
  }
    return config;
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
