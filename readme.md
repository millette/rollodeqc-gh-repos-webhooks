# rollodeqc-gh-repos-webhooks
[![Build Status](https://travis-ci.org/millette/rollodeqc-gh-repos-webhooks.svg?branch=master)](https://travis-ci.org/millette/rollodeqc-gh-repos-webhooks)
[![Coverage Status](https://coveralls.io/repos/github/millette/rollodeqc-gh-repos-webhooks/badge.svg?branch=master)](https://coveralls.io/github/millette/rollodeqc-gh-repos-webhooks?branch=master)
[![Dependency Status](https://gemnasium.com/badges/github.com/millette/rollodeqc-gh-repos-webhooks.svg)](https://gemnasium.com/github.com/millette/rollodeqc-gh-repos-webhooks)
> RoLLodeQc utility to fetch repos webhooks.

## Install
```
$ npm install --save rollodeqc-gh-repos-webhooks
```

## Usage
```js
const rollodeqcGhReposWebhooks = require('rollodeqc-gh-repos-webhooks')

rollodeqcGhReposWebhooks('unicorns')
//=> 'unicorns & rainbows'
```

## API
### rollodeqcGhReposWebhooks(input, [options])
#### input
Type: `string`

Lorem ipsum.

#### options
##### foo
Type: `boolean`<br>
Default: `false`

Lorem ipsum.

## CLI
```
$ npm install --global rollodeqc-gh-repos-webhooks
```

```
$ rollodeqc-gh-repos-webhooks --help

  Usage
    rollodeqc-gh-repos-webhooks [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ rollodeqc-gh-repos-webhooks
    unicorns & rainbows
    $ rollodeqc-gh-repos-webhooks ponies
    ponies & rainbows
```


## License
AGPL-v3 © [Robin Millette](http://robin.millette.info)
