// @ts-check

import { run, bench, baseline } from 'mitata'

baseline('yocto-ttl-cache', async () => {
  const { TTLCache } = await import('../lib/index.js')
  const cache = new TTLCache(1)
  cache.get('key')
  cache.get('key', () => 'value')
  cache.set('key', 'newValue')
})

bench('@isaacs/ttlcache', async () => {
  const { default: TTLCache } = await import('@isaacs/ttlcache')
  const cache = new TTLCache({ ttl: 1 })
  cache.get('key')
  cache.set('key', 'value')
  // eslint-disable-next-line sonarjs/no-element-overwrite
  cache.set('key', 'newValue')
})

await run({
  colors: !['1', 'true'].includes(
    /** @type {string} */ (process.env.NO_COLOR?.toLowerCase()),
  ),
})
