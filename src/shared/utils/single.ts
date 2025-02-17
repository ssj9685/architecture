declare let global: any; // global이 존재한다고 선언
const SINGLETONS = typeof window !== "undefined" ? window : global;

export function single<T extends object>(object: T) {
  const key = `__SINGLE_${object.constructor.name}__`;
  if (!SINGLETONS[key]) {
    SINGLETONS[key] = object;
  }

  return SINGLETONS[key] as T;
}
