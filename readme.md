# React Redux Express Hot Boilerplate
Boilerplate app I've put together using the following:
* [React](https://github.com/facebook/react)
* [Express](http://expressjs.com)
* [Redux](https://github.com/rackt/redux)
* [Babel](http://babeljs.io) with [babel-plugin-transform-decorators](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-decorators) (For easy @connect to Redux store)
* [Webpack](http://webpack.github.io) for bundling
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools)
* [Morgan](https://github.com/expressjs/morgan) for logging in development
* [style-loader](https://github.com/webpack/style-loader), [sass-loader](https://github.com/jtangelder/sass-loader) and [less-loader](https://github.com/webpack/less-loader)
## NPM Scripts
### Production
```bash
npm run postinstall
```
Compiles production ready javascript and stylesheet files.
```bash
npm run start
```
Sets NODE_ENV to production and starts server.

### Development
```bash
npm run dev
```
Sets NODE_ENV to development and starts express server with hot reloading.
