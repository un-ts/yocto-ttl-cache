import { TTLCache } from 'yocto-ttl-cache'

const delay = (delay: number) =>
  new Promise<void>(resolve => setTimeout(resolve, delay))

test('basic usage', async () => {
  const cache = new TTLCache<string, string>()
  expect(cache.get('key')).toBe(undefined)
  cache.set('key', 'value')
  expect(cache.get('key')).toBe('value')
  expect(cache.get('key')).toBe('value')
  await delay(1500)
  expect(cache.get('key')).toBe(undefined)
})

test('get with setter', async () => {
  const cache = new TTLCache<string, string>()
  expect(cache.get('key')).toBe(undefined)
  expect(cache.get('key', () => 'value')).toBe('value')
  expect(cache.get('key', () => 'unused')).toBe('value')
  await delay(1500)
  expect(cache.get('key')).toBe(undefined)
})
