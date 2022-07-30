import Head from "next/head";
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import Header from "../components/Header";
import Loader from "../components/Loader";
import UserContext from "../contexts/UserContext";

function WithLayout(OriginalComponent, data) {
  return function NewComponent(props) {
    const router = useRouter();
    const [Loading, setLoading] = useState(false);
    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
      const handleStart = () => setLoading(true);
      const handleComplete = () => setLoading(false);

      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);

      setTimeout(() => setPreloader(true), 1000);

      return () => {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
      }
    });

    return Loading ? <Loader width='150px' height='150px' /> : (
      <>
        <Head>
          <title>{data.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <UserContext>
          <Header />
          <main>  
            <OriginalComponent {...props} />
          </main>
        </UserContext>
      </>
    );
  }
}

export default WithLayout;
