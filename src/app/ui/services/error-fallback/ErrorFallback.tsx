import { Button } from '@mui/material';
import React, { ErrorInfo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { RouteKeys } from '../../../../constants';
import {
  ErrorBoundaryError,
  ErrorBoundaryReset,
} from '../../../entities/boundaries/ErrorBoundary';
import { Headings } from '../../elements/headings';

export const ErrorFallback = (
  reset: ErrorBoundaryReset,
  error?: ErrorBoundaryError,
  errorInfo?: ErrorInfo
) => {
  const { t } = useTranslation();

  return (
    <>
      <Headings>
        <h2>
          {t('ui:status.error')} {error?.name}
        </h2>
      </Headings>
      <pre>{errorInfo && JSON.stringify(errorInfo)}</pre>

      <NavLink to={RouteKeys.HOME}>
        <Button variant="contained" onClick={reset}>
          {t('ui:link.go_home')}
        </Button>
      </NavLink>
    </>
  );
};
