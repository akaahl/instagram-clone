import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>This is the Instagram Clone</h1>

      {/* Header */}
      <Header />

      {/* Feed */}

      {/* Modal */}
    </div>
  )
}

export default Home
