import { useEffect } from 'react';

import { useDeviceDetermine } from './useDeviceDetermine';

export const useBodyBackground = (image: string, size = 'cover', value = 'auto') => {
  const [deviceType]= useDeviceDetermine();

  useEffect(() => {
    document.body.style.setProperty('--background-image', `url("${image}")`);
    document.body.style.setProperty('--background-size', size);
    document.body.style.setProperty('--background-position', value);

    return () => {
      document.body.style.removeProperty('--background-image');
      document.body.style.removeProperty('--background-size');
      document.body.style.removeProperty('--background-size');
    };
  }, [deviceType]);
};
