import React from 'react';

import { classMerge } from '../../../../utils';

interface SubheaderProps {
    children: React.ReactNode;
    noBottomOffset?: boolean;
    className?: string;
}

export const Subheader = (props: SubheaderProps) => {
  return (
    <span
      style={{ marginBottom: props.noBottomOffset ? '0' : '8px' }}
      className={classMerge('subheader-text', props.className)}
    >
      {props.children}
    </span>
  );
};