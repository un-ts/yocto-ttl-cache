import { setTimeout } from 'node:timers/promises'

import { TTLCache } from 'yocto-ttl-cache'

test('basic usage', async () => {
  const cache = new TTLCache<string, string>()
  expect(cache.get('key')).toBe(undefined)
  cache.set('key', 'value')
  expect(cache.get('key')).toBe('value')
  expect(cache.get('key')).toBe('value')
  await setTimeout(1000)
  expect(cache.get('key')).toBe(undefined)
})

test('get with setter', async () => {
  const cache = new TTLCache<string, string>()
  expect(cache.get('key')).toBe(undefined)
  expect(cache.get('key', () => 'value')).toBe('value')
  expect(cache.get('key', () => 'unused')).toBe('value')
  await setTimeout(1000)
  expect(cache.get('key')).toBe(undefined)
})
