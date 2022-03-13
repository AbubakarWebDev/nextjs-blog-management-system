import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { useRouter } from 'next/router';
import UserContext from "../contexts/UserContext";

const WithLayout = (OriginalComponent, data) => {
  function NewComponent(props) {
    const router = useRouter();
    const [Loading, setLoading] = useState(false);
    const [preLoading, setPreLoading] = useState(true);

    useEffect(() => {
      setPreLoading(false);
      const handleStart = () => setLoading(true);
      const handleComplete = () => setLoading(false);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)

      return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
      }
    });

    if (Loading || preLoading) {
      return <Loader width='150px' height='150px' />;
    }
    else {
      return (
        <>
          <Head>
            <title>{data.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>

          <Header />

          <main> 
            <UserContext>
              <OriginalComponent {...props} />
            </UserContext>
          </main>
        </>
      );
    }
  }
  return NewComponent;
}

export default WithLayout;
