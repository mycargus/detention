# Quarantined API

We use the open source [Serverless Framework] to provision and deploy the
`Quarantined` API service to AWS.

## Setup

Make sure you're using the Node.js and npm versions defined in `package.json`.

Now install dependencies:

```bash
npm ci
```

Be sure to use `npm ci`! It's faster than `npm install` and actually uses the
`package-lock.json`.

## Test

After completing the above setup steps:

```bash
npm test
```

## Provision / Deploy

Deploy to the `dev` (non-production) stage:

```bash
serverless deploy
```

Running this for the first time will provision everything on AWS. Subsequent
runs will deploy any code changes, which takes much less time compared to
provisioning.

[serverless framework]: https://www.serverless.com/
