# Fitmind Client

[![Build Status](https://travis-ci.org/fitmind/client.svg?branch=master)](https://travis-ci.org/fitmind/client)
[![Netlify Status](https://api.netlify.com/api/v1/badges/e17387ae-772b-43ee-b438-64a53b39624c/deploy-status)](https://app.netlify.com/sites/distracted-torvalds-9fe055/deploys)

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