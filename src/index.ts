const perf = typeof performance == 'undefined' ? Date : performance

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- it's fine
export class TTLCache<K extends keyof any, V = unknown> {
  private readonly ttlMap = new Map<K, number>()
  private readonly valueMap = new Map<K, V | undefined>()

  constructor(private readonly ttl = 1000) {}

  get(key: K, setter?: (value?: V) => V) {
    const now = perf.now()
    const ttl = this.ttlMap.get(key)
    let value = this.valueMap.get(key)
    if (!ttl || value == null || now > ttl) {
      this.ttlMap.set(key, now + this.ttl)
      this.valueMap.set(key, (value = setter?.(value)))
    }
    return value
  }

  set(key: K, value: V) {
    this.ttlMap.set(key, perf.now() + this.ttl)
    this.valueMap.set(key, value)
  }
}
