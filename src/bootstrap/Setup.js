import React from 'react';
import { LocaleContextProvider } from '../i18n/LocaleContext';
export default ({ children }) => (
    <LocaleContextProvider>
        {children}
    </LocaleContextProvider>
);