import Snackbar from '@mui/material/Snackbar';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { NotifierThemeKeys,NotifierThemeType } from '../../../constants';
import { useRootStore } from '../../../hooks/useRootStore';
import {
  AlertError,
  AlertInfo,
  AlertSuccess,
  AlertWarning,
} from './components/alerts';

const handleGetNotifierContent = (
  theme: NotifierThemeType | null,
  message: string | null,
  onClose: () => void
): JSX.Element | undefined => {
  switch (theme) {
    case NotifierThemeKeys.success:
      return <AlertSuccess message={message} onClose={onClose} />;
    case NotifierThemeKeys.error:
      return <AlertError message={message} onClose={onClose} />;
    case NotifierThemeKeys.warning:
      return <AlertWarning message={message} onClose={onClose} />;
    case NotifierThemeKeys.info:
      return <AlertInfo message={message} onClose={onClose} />;
    default:
      return undefined;
  }
};

interface NotifierProviderProps {
    children: React.ReactNode;
}

export const NotifierProviderObserver = (props: NotifierProviderProps) => {
  const { notifierStore } = useRootStore();

  const handleClose = () => notifierStore.resetOptions();

  return (
    <>
      <Snackbar
        open={notifierStore.getIsOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={notifierStore.getMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        {handleGetNotifierContent(
          notifierStore.getTheme,
          notifierStore.getMessage,
          handleClose
        )}
      </Snackbar>
      {props.children}
    </>
  );
};

export const NotifierProvider = observer(NotifierProviderObserver);
