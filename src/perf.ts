export const perf =
  /* istanbul ignore next */ typeof performance === 'undefined'
    ? Date
    : performance
