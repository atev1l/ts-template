import { Alert } from '@mui/material';

import { IAlert } from './alert.interface';

export const AlertError = (props: IAlert) => {
  return (
    <Alert onClose={props.onClose} severity="error" sx={{ width: '100%' }}>
      {props.message}
    </Alert>
  );
};