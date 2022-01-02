// CSS Imports
import '../styles/globals.css'

// Components Imports
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout />
      <Component {...pageProps} />
    </div>
  )
}
