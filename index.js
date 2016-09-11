/*
RoLLodeQc utility to fetch repos webhooks.

Copyright 2016
Robin Millette <mailto:robin@millette.info>
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

// npm
const ghRepos = require('rollodeqc-gh-repos')
const rollodeqcGhRepoWebhooks = require('rollodeqc-gh-repo-webhooks')
const PromiseThrottle = require('promise-throttle')

const throttler = new PromiseThrottle({ requestsPerSecond: 5000 / 3600 })

module.exports = (username) => ghRepos(username, true)
  .then((repos) => repos.filter((v) => !v.fork))
  .then((repos) => Promise.all(repos.map((x) => throttler.add(rollodeqcGhRepoWebhooks.bind(this, x)))))
