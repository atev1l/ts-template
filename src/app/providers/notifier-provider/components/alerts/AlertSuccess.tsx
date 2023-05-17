import { Alert } from '@mui/material';

import { IAlert } from './alert.interface';

export const AlertSuccess = (props: IAlert) => {
  return (
    <Alert onClose={props.onClose} severity="success" sx={{ width: '100%' }}>
      {props.message}
    </Alert>
  );
};