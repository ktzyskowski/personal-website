import '../styles/index.css'
import Layout from '../components/common/layout'

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
