const serverless = require('serverless-http')

const koa = require('koa')
const bodyParser = require('koa-bodyparser-node6')
const Router = require('koa-router')
const app = new koa()
const router = new Router()

router.get('/', (ctx, next) => {
  ctx.body = 'Hello World!'
})

router.post('/echo', (ctx, next) => {
  let body = ctx.request.body
  ctx.body = body
})

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

module.exports.handler = serverless(app)
