import './style/app.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './app'
import { INITIAL_STATE } from './state'
import { initialize } from 'statex'

initialize(INITIAL_STATE, {
  hotLoad: process.env.NODE_ENV !== 'production',
  domain: 'todo'
})

ReactDOM.render(<App />, document.getElementById('root'))