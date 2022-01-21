import { Layout } from '../components/Layout'
import { GlobalProvider } from '../context/GlobalContext'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProvider>
  )
}

export default MyApp