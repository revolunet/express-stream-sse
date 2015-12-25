# express-stream-sse

![npm](https://img.shields.io/npm/v/express-stream-sse.svg) ![license](https://img.shields.io/npm/l/express-stream-sse.svg) ![github-issues](https://img.shields.io/github/issues/revolunet/express-stream-sse.svg) ![Circle CI build status](https://circleci.com/gh/revolunet/express-stream-sse.svg?style=svg)

Convert NodeJS streams to Server-Sent Events express routes (EventSource)

![nodei.co](https://nodei.co/npm/express-stream-sse.png?downloads=true&downloadRank=true&stars=true)

## Install

`npm i -S express-stream-sse`

## Usage

```js

import express from 'express';
import streamToSSE from 'express-stream-sse';

let app = express();

app.get('/test', function(req, res){

    var stream = require('./getSampleStream');

    return streamToSSE(res, stream);

});

app.listen(process.env.PORT || 4000);
```

Then on the client side you can :

```js
var source = new EventSource('/events');
source.onmessage = function(e) {
  document.body.innerHTML += e.data + '<br>';
};

```

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[babel-cli](https://www.npmjs.com/package/babel-cli) | ^6.3.17 | ✔
[babel-eslint](https://www.npmjs.com/package/babel-eslint) | * | ✔
[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) | * | ✔
[babel-tape-runner](https://www.npmjs.com/package/babel-tape-runner) | * | ✔
[eslint](https://www.npmjs.com/package/eslint) | * | ✔
[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) | * | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.8 | ✔
[tap-spec](https://www.npmjs.com/package/tap-spec) | ^4.0.2 | ✔
[tape](https://www.npmjs.com/package/tape) | ^4.0.0 | ✔
[zuul](https://www.npmjs.com/package/zuul) | ^3.8.0 | ✔


## Author

Julien Bouquillon <julien@bouquillon.com> http://github.com/revolunet

## License

 - **MIT** : http://opensource.org/licenses/MIT
