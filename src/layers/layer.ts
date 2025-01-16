export class Layer<T> {
  add<K extends keyof T>(key: K, object: T[K]) {
    (this as any)[key] = object;
  }

  get<K extends keyof T>(key: K) {
    return (this as any)[key] as T[K];
  }
}
