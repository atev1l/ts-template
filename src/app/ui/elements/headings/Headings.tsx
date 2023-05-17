import React, { ReactNode } from 'react';

import { classMerge, classWithModifiers } from '../../../../utils';

interface HeadingsProps {
    white?: boolean
    className?: string
    children: ReactNode
}

export const Headings = (props: HeadingsProps) => {
  return (
    <div className={classMerge(classWithModifiers('headings', props.white && 'white'), props.className)}>
      {props.children}
    </div>
  );
};