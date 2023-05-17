import { useEffect, useState } from 'react';

import { DeviceType, DeviceTypeKeys } from '../constants/deviceType';


export const useDeviceDetermine = (): [DeviceType, number] => {

  const getDeviceType = (): DeviceType => {
    if(window.innerWidth < 768)
      return DeviceTypeKeys.Mobile;
    else if (window.innerWidth < 900)
      return DeviceTypeKeys.Tablet;
    else return DeviceTypeKeys.Desktop;
  };

  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [deviceType, setDeviceType] = useState<DeviceType>(getDeviceType());

  const handleDetermine = () => {
    setScreenWidth(window.innerWidth);
    setDeviceType(getDeviceType);
  };

  useEffect(() => {
    handleDetermine();
    window.addEventListener('resize', handleDetermine);
    return window.removeEventListener('resize', handleDetermine);
  }, []);

  return [deviceType,screenWidth];
};
