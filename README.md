# rub-api

[![npm](https://img.shields.io/npm/v/@mediahosting/rub-api.svg?style=flat-square)](https://www.npmjs.com/package/@mediahosting/rub-api)

#Information

The RubApi is the wrapper for the [Roeth and Beck](https://roeth-und-beck.de) RestAPI

Now working routes:
- account
- accounting
- address
- ddos_alert
- domain
- domain/dns
- domain/handle
- domain/nameserver
- domain/price
- license/plesk
- news
- reseller/news
- teamspeak_instance
- teamspeak_instance/whitelist
- ssh_key


## Installation

Install the package
```
$ npm install @mediahosting/rub-api
```
##Usage
The host variable is not required but the apiKey must be specified
```javascript
import { RubApi } from "@mediahosting/rub-api"

const api = new RubApi({
    host: "https://api.reselling.services/api/v1",
    apiKey: ""
})

api.general.accounting.getBalance()
    .then(value => { console.log(value) })
    .catch(error => { console.error(error) })
```
