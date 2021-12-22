import React from 'react';
import Head from 'next/head';
import App, { AppContext, AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import 'react-toastify/dist/ReactToastify.css';
import { SdkProvider } from '../sdk-context';
import { GraphQLClient } from 'graphql-request';
import { GRAPH_URL } from '../constants';
import { getSdk } from '../graphql/generated/badger';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const client = new GraphQLClient(GRAPH_URL);
const sdk = getSdk(client);

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
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex flex-col flex-grow">
            <Header />
            <Component {...pageProps} />
          </div>
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
