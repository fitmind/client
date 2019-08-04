# Fitmind Client

[![Build Status](https://travis-ci.org/fitmind/client.svg?branch=master)](https://travis-ci.org/fitmind/client)

Develop Status:
[![Netlify Status](https://api.netlify.com/api/v1/badges/cd3334eb-9d23-474f-86a9-3fc7e4373cb0/deploy-status)](https://app.netlify.com/sites/practical-lamport-f3961f/deploys)

Staging Status:
[![Netlify Status](https://api.netlify.com/api/v1/badges/e17387ae-772b-43ee-b438-64a53b39624c/deploy-status)](https://app.netlify.com/sites/distracted-torvalds-9fe055/deploys)

## Environment file

An environment file is necessary along with the server URL, this is inside a .env file at root level.

If running the server locally:

```
REACT_APP_SERVER_URL=http://localhost:8080/
```

If running the stub server locally:

```
REACT_APP_SERVER_URL=http://localhost:9999/
```

Dev env:

```
REACT_APP_SERVER_URL=https://fitmind-dev-server.herokuapp.com
```

### Installing dependencies

```bash
yarn
```

### Building

Building will be at root level under the build folder

```bash
yarn build
```

### Running locally

```bash
yarn start
```

### Running tests

```bash
yarn test
```

With coverage

```bash
yarn test -- --coverage
```

| Highly recommend running prettier when you perform changes in order to format the code

### Prettier format all

```bash
yarn prettier:all
```

### Prettier on watch mode

```bash
yarn prettier:watch
```

### Prettier check if needs formatting

```bash
yarn prettier:check
```

### Running lint check

```bash
yarn lint
```

### Running lint fix

```bash
yarn lint:fix
```

### Preferred helper library:

-   [Ramda JS](https://ramdajs.com/docs/#)
