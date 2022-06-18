import axios from 'axios'
import '../styles/globals.css'

axios.interceptors.request.use((config) => {
  config.url = `/api/proxy?url=${encodeURIComponent(config.url)}`
  return config;
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
