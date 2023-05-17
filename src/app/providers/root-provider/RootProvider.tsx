import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from '../../entities/boundaries/ErrorBoundary';
import { ErrorFallback } from '../../ui/services/error-fallback/ErrorFallback';
import { LocaleProvider } from '../locale-provider/LocaleProvider';
import { LocationHistoryProvider } from '../location-history-provider/LocationHistoryProvider';
import { StoreProvider } from '../store-provider/StoreProvider';

export const RootProvider = (props: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <StoreProvider>
        <StoreProvider>
          <LocaleProvider>
            <LocationHistoryProvider>
              <ErrorBoundary fallback={ErrorFallback}>
                {props.children}
              </ErrorBoundary>
            </LocationHistoryProvider>
          </LocaleProvider>
        </StoreProvider>
      </StoreProvider>
    </BrowserRouter>
  );
};
