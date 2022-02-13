import Head from "next/head";
import Header from "./Header";
import Loader from "./Loader";

function MainLayout({ title, children }) {
  return (
    <>
      <Loader>
        <Head>
          <title>{ title }</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Header />

        <main>{ children }</main>
      </Loader>
    </>
  );
}

export default MainLayout;
