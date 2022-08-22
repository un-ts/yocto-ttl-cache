# yocto-ttl-cache

[![GitHub Actions](https://github.com/un-ts/yocto-ttl-cache/workflows/CI/badge.svg)](https://github.com/un-ts/yocto-ttl-cache/actions/workflows/ci.yml)
[![Codecov](https://img.shields.io/codecov/c/github/un-ts/yocto-ttl-cache.svg)](https://codecov.io/gh/un-ts/yocto-ttl-cache)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/un-ts/yocto-ttl-cache.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/un-ts/yocto-ttl-cache/context:javascript)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fun-ts%2Fyocto-ttl-cache%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![npm](https://img.shields.io/npm/v/yocto-ttl-cache.svg)](https://www.npmjs.com/package/yocto-ttl-cache)
[![GitHub Release](https://img.shields.io/github/release/un-ts/yocto-ttl-cache)](https://github.com/un-ts/yocto-ttl-cache/releases)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3.svg)](https://github.com/changesets/changesets)

The smallest and fastest TTL cache implementation in JavaScript

## TOC <!-- omit in toc -->

- [Usage](#usage)
  - [Install](#install)
  - [API](#api)
- [Sponsors](#sponsors)
- [Backers](#backers)
- [Changelog](#changelog)
- [License](#license)

## Usage

### Install

```sh
# pnpm
pnpm add yocto-ttl-cache

# yarn
yarn add yocto-ttl-cache

# npm
npm i yocto-ttl-cache
```

### API

```js
import { TTLCache } from 'yocto-ttl-cache' // only named export is supported

const cache = new TTLCache(1000) // the `ttl` option of `constructor` is `1000` by default

cache.get('key') // `undefined`
cache.get('key', () => 'value') // get with `setter`, `'value'`
cache.get('key', () => 'unused') // `'value'` is not stale

cache.set('key', 'newValue')
cache.get('key') // `'newValue'`

setTimeout(() => {
  cache.get('key') // `undefined`, stale after `ttl`
}, 1000)
```

## Sponsors

| 1stG                                                                                                                               | RxTS                                                                                                                               | UnTS                                                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/organizations.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/organizations.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/organizations.svg)](https://opencollective.com/unts) |

## Backers

| 1stG                                                                                                                             | RxTS                                                                                                                             | UnTS                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [![1stG Open Collective backers and sponsors](https://opencollective.com/1stG/individuals.svg)](https://opencollective.com/1stG) | [![RxTS Open Collective backers and sponsors](https://opencollective.com/rxts/individuals.svg)](https://opencollective.com/rxts) | [![UnTS Open Collective backers and sponsors](https://opencollective.com/unts/individuals.svg)](https://opencollective.com/unts) |

## Changelog

Detailed changes for each release are documented in [CHANGELOG.md](./CHANGELOG.md).

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
