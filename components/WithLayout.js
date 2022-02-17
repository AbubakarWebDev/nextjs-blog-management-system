import React, { useState, useEffect } from 'react';
import Head from "next/head";
import Header from "./Header";
import Loader from "./Loader";
import { useRouter } from 'next/router';

const WithLayout = (OriginalComponent, data) => {
  function NewComponent() {
    const router = useRouter();
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url) => (url === router.asPath) && setLoading(false);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
    });

    if (Loading) {
      return <Loader />;
    } 
    else {
      return (
        <>
          <Head>
            <title>{ data.title }</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
  
          <Header />
  
          <main> <OriginalComponent /> </main>
        </>
      );
    }
  }
  return NewComponent;
}

export default WithLayout;
