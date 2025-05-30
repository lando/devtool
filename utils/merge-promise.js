const nativePromisePrototype = (async () => {})().constructor.prototype;
const descriptors = ['then', 'catch', 'finally'].map((property) => [
  property,
  Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property),
]);

export default function mergePromise(thing, promise) {
  for (const [property, descriptor] of descriptors) {
    const value =
      typeof promise === 'function' ? (...args) => Reflect.apply(descriptor.value, promise(), args) : descriptor.value.bind(promise);
    Reflect.defineProperty(thing, property, { ...descriptor, value });
  }

  return thing;
}
