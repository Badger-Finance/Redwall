import React from 'react';
import Head from 'next/head';
import App, { AppContext, AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

/* eslint-disable react/jsx-props-no-spreading */
function WizardWorkshop({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
        />
      </Head>
          <div className="flex flex-col flex-grow bg-cave">
            <Navigation />
            <Component {...pageProps} />
            <ToastContainer
              position="bottom-right"
              newestOnTop={true}
              closeOnClick
              theme="dark"
              draggable
            />
            <Footer />
          </div>
    </div>
  );
}

WizardWorkshop.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};

export default WizardWorkshop;
