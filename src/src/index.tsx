import './style/app.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './app'

// hot load application state when in development mode
if (process.env.NODE_ENV === 'development') {
  require('../react-ts/hot-load')('app-name')
}

ReactDOM.render(<App />, document.getElementById('root'))