import { LinearProgress } from '@mui/material';
import React, { LegacyRef, useEffect, useRef } from 'react';

import { useViewportObserver } from '../../../../hooks/useViewportObserver';
import { classNames } from '../../../../utils/classNames';

export interface ScrollTriggerProps {
    options?: IntersectionObserverInit;
    disabled?: boolean;
    hidden?: boolean;
    mt?: number | boolean;
    onClick?: () => void;
    onIntersection: () => void;
}

export const ScrollTrigger = (props: ScrollTriggerProps) => {
  const triggerRef = useRef<Element | undefined>();
  const { isVisible } = useViewportObserver(triggerRef, props.options);

  const handleClick = () => props.onClick && props.onClick();

  useEffect(
    () => {isVisible && !props.disabled && props.onIntersection();},
    [isVisible]
  );

  const cls = classNames('full-width', {
    'd-none': props.hidden,
    'mt-5': !!props.mt,
  });


  return (
    <div
      className={cls}
      ref={triggerRef as LegacyRef<HTMLDivElement>}
      style={typeof props.mt == 'number' ? { marginTop: props.mt * 2 } : undefined}
    >
      <LinearProgress onClick={handleClick} />
    </div>
  );
};