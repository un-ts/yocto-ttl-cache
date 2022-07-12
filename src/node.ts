import { performance as _perf } from 'node:perf_hooks'

export const perf =
  /* istanbul ignore next */ typeof performance === 'undefined'
    ? _perf
    : performance
