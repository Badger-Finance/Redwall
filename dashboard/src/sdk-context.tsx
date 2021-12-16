import { GraphQLClient } from 'graphql-request';
import React from 'react';
import { GRAPH_URL } from './constants';
import { getSdk } from './graphql/generated/badger';

export const SdkContext = React.createContext({} as ReturnType<typeof getSdk>);
export const SdkProvider = SdkContext.Provider;
