import './style/app.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './app'

ReactDOM.render(<App />, document.getElementById('root'))

// hot load application state when in development mode
if (process.env.NODE_ENV === 'development') {
  require('../node_modules/react-ts/src/hot-load')('app-name')
}