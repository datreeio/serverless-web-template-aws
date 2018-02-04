# Serverless Web Template

## The template is based on

* [Node.js](https://nodejs.org/) version 6.10.2 (AWS Lambda version)
* [Babel](https://babeljs.io/) for ES7 async/await support (and more)
* [Koa](http://koajs.com/) version 2
* [Serverless](https://serverless.com/) framework
* [AWS X-Ray](https://aws.amazon.com/xray/)
* [AWS API Gateway](https://aws.amazon.com/api-gateway/)

## Installation

* `$ nvm install` (will use the .nvmrc Node.js version 6.10.2)
* `$ npm install` (install dependencies)
* `$ npm install -g serverless` (global installation of serverless)

## Usage

* `$ npm run dev` (run serverless-offline for local development)
* `$ npm run deploy-dev` (deploys the service to dev)
* `$ npm run deploy-prod` (deploys the service to prod)

(using the AWS credentials in ~/.aws/credentials)

## Development

There are 2 example endpoints under the `handler.js` file (run the local dev server `$ npm run dev`)

### GET /

```bash
$ curl -X GET http://localhost:3000/
```

### POST /echo

```bash
$ curl -X POST \
  http://localhost:3000/echo \
  -H 'Content-Type: application/json' \
  -d '{"name": "testing echo service"}'
```

The template is based on [Serverless Node.js Starter](https://github.com/AnomalyInnovations/serverless-nodejs-starter)
