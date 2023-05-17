import { Alert } from '@mui/material';
import React from 'react';

import { IAlert } from './alert.interface';

export const AlertInfo = (props: IAlert) => {
  return (
    <Alert onClose={props.onClose} severity="info" sx={{ width: '100%' }}>
      {props.message}
    </Alert>
  );
};