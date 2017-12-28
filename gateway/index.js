const express = require('express')
const proxy = require('express-http-proxy')
const cors = require('cors')
const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
const config = require('./config')

const app = express()

const env = process.env.NODE_ENV

app.use(cors())
app.use((req, res, done) => {
    if (req.originalUrl.indexOf('/api') > -1) {
        return jwt({
            secret: jwksRsa.expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: `https://${config['auth0']['domain']}/.well-known/jwks.json`
            }),
            audience: config['auth0Client']['clientId'],
            issuer: `https://${config['auth0']['domain']}/`,
            algorithms: ['RS256']
        })(req, res, done)
    } else {
        done()
    }
})

let gates = [
    { name: 'stats', route: 'http://stats' },
    { name: 'store', route: 'http://store' }
]

app.use((req, res, done) => {
    console.log(`url: ${req.originalUrl} | host:${req.headers['host']}`)
    console.time('gateway')
    console.log(req.user)

    let routes = gates.filter(g => req.originalUrl.indexOf(`/api/${g.name}`) > -1)

    if (routes.length === 1) {
        let stripped = req.originalUrl.replace(`/api/${routes[0].name}`, '')
        let url = `${routes[0].route}${stripped}`

        req.headers['email'] = req.user.email
        req.headers['userAuthId'] = req.user.sub

        console.log(`Passing request to ${url}`)
        console.timeEnd('gateway')
        return proxy(url, {
            forwardPath: () => url
        })(req, res, () => {
            console.timeEnd('gateway')
            done()
        })
    } else {
        let url = 'http://client' + req.originalUrl
        console.log(`No route found, passing to ${url}`)

        return proxy(url, {preserveHostHdr: true})(req, res, () => {
            console.timeEnd('gateway')
            done()
        })
    }
})

const port = process.env.PORT || 4200
app.listen(port, function () {
    console.log(`listening @ ${port}`)
})
