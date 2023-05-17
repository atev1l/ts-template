/**
 * This class represent keys and values swapping.
 *
 * ### Research
 * - https://www.google.com/search?q=bilateral+mapping+npm
 * - https://startfunction.com/bidirectional-map-javascript/
 * - https://www.npmjs.com/package/bi-directional-map
 */
export class BiMap<A1 extends keyof never, A2 extends keyof never> {
  protected forwardMap: Record<A1, A2>;
  protected backwardMap: Record<A2, A1>;

  constructor(map: Record<A1, A2>) {
    const mapKeys = Object.keys(map) as A1[];

    this.forwardMap = { ...map };
    this.backwardMap = mapKeys.reduce(
      (result, key) => ({ ...result, [map[key]]: key }),
      {} as Record<A2, A1>
    );
  }

  public forward(key: A1): A2 {
    return this.forwardMap[key];
  }

  public backward(key: A2): A1 {
    return this.backwardMap[key];
  }
}
