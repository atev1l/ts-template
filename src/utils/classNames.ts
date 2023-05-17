/**
 *
 * @returns `class1 class2`
 */
export function classMerge(
  ...classNames: (string | null | undefined)[]
): string {
  const space = ' ';
  return classNames.filter(Boolean).join(space);
}

/**
 * Join modifiers with origin class.
 * @returns `"origin-class origin-class--modifier"`
 */
export function classWithModifiers(
  originClass: string,
  ...modifiers: (string | number | false | null | undefined)[]
): string {
  modifiers = modifiers.filter(Boolean);
  if (!modifiers.length) return originClass;

  const space = ' ';
  const separator = '--';

  modifiers = modifiers.map(modifier => originClass + separator + modifier);
  return originClass + space + modifiers.join(space);
}

export type Mods = Record<string, boolean | string | undefined>;

/**
 * Distribution of classes by condition.
 * @returns `"origin-class origin-class mod-classes"`
 */

export function classNames(
  originClass: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    originClass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
