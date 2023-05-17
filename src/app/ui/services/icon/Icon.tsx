import { SVGAttributes } from 'react';

import { classMerge, classWithModifiers } from '../../../../utils';

export type IconName =
  | 'telegram'
  | 'twitter'
  | 'discord'
  | 'youtube'
  | 'tronlink'
  | 'arrow-top-right'
  | 'purchase-bag'
  | 'bricks'
  | 'person'
  | 'gear'
  | 'document'
  | 'minus'
  | 'plus'
  | 'burger-menu'
  | 'check-mark'
  | 'support'
  | 'IOs'
  | 'android'
  | 'api/data-center'
  | 'cross'
  | 'arrow-up'
  | 'world'
  | 'blog'
  | 'logo'
  | 'lightning'
  | 'time-history'
  | 'link'
  | 'copy'
  | 'lock'
  | 'account'
  | 'data-center'
  | 'question-frame'
  // eslint-disable-next-line @typescript-eslint/ban-types
  | (string & {});

interface IconProps extends SVGAttributes<SVGElement> {
  name?: IconName;
  modifiers?: Array<string | number | false | null | undefined>;
}

/**
 *
 * @prop `modifiers` only work when className given.
 * @prop `className` is a root class, which is modified by `name`,
 * that will be modified by `modifiers` including `name` modifications.
 *
 * Example: `"icon mentor-search__icon mentor-search__icon--chevron"`
 *
 */

export function Icon(props: IconProps) {
  if (props.href) {
    return (
      <img
        src={props.href}
        className={classMerge(
          'icon',
          props.className &&
            classWithModifiers(props.className, ...(props.modifiers || []))
        )}
      />
    );
  }

  return (
    <svg
      {...props}
      className={classMerge(
        'icon',
        props.className &&
          classWithModifiers(
            classWithModifiers(props.className, props.name),
            ...(props.modifiers || [])
          )
      )}
    >
      <use href={`/static/icons.svg#${props.name}`} />
    </svg>
  );
}
