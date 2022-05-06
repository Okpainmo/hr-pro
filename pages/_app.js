import '../styles/css/main.module.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="hr-pro: an amazing hotel reservation practice-project 
          built with next JS. Thanks to John Smilga and Coding-Addict"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
