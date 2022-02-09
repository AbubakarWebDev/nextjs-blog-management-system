import Head from 'next/head'
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
    </>
  );
}

export default Home;