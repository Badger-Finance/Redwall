import React from 'react';
import Head from 'next/head';
import App, { AppContext, AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { SdkProvider } from '../sdk-context';
import { GraphQLClient } from 'graphql-request';
import { GRAPH_URL } from '../constants';
import { getSdk } from '../graphql/generated/badger';

const client = new GraphQLClient(GRAPH_URL);
const sdk = getSdk(client);

/* eslint-disable react/jsx-props-no-spreading */
function ApprovalsTracker({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
        />
      </Head>
      <SdkProvider value={sdk}>
        <div className="flex flex-col min-h-screen">
          <Component {...pageProps} />
        </div>
      </SdkProvider>
    </>
  );
}

ApprovalsTracker.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};

export default ApprovalsTracker;
