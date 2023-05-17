import { Alert } from '@mui/material';

import { IAlert } from './alert.interface';

export const AlertWarning = (props: IAlert) => {
  return (
    <Alert onClose={props.onClose} severity="warning" sx={{ width: '100%' }}>
      {props.message}
    </Alert>
  );
};