const express = require('express')
const next = require('next')
const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('./i18n')
const routes = require('./app/routes')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const port = process.env.PORT || 3000

const handle = routes.getRequestHandler(app)
const server = express()

app.prepare().then(() => {
  server.use(nextI18NextMiddleware(nextI18next))
  server.use(handle).listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})

const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
  app.render(req, res, route.page, query)
})