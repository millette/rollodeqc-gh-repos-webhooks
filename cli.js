#!/usr/bin/env node

/*
RoLLodeQc utility to fetch repos webhooks.

Copyright 2016
Robin Millette <robin@millette.info>
<http://robin.millette.info>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the
[GNU Affero General Public License](LICENSE.md)
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict'
const meow = require('meow')
const rollodeqcGhReposWebhooks = require('./')

const cli = meow(`
  Usage
    $ rollodeqc-gh-repos-webhooks [username]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ rollodeqc-gh-repos-webhooks
    unicorns & rainbows
    $ rollodeqc-gh-repos-webhooks ponies
    ponies & rainbows
`)

rollodeqcGhReposWebhooks(cli.input[0] || 'millette')
  .then((repos) => repos.filter((v) => v.hooks && v.hooks.length))
  .then((repos) => repos.map((v) => {
    return {
      full_name: v.full_name,
      hooks: v.hooks.map((v) => v.name)
    }
  }))
  .then((repos) => {
    console.log(JSON.stringify(repos, null, ' '))
  })
  .catch(console.error)
