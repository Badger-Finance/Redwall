import React from 'react';
import { getSdk } from './graphql/generated/badger';

export const SdkContext = React.createContext({} as ReturnType<typeof getSdk>);
export const SdkProvider = SdkContext.Provider;
