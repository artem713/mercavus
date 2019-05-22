import * as React from 'react'
import { render } from 'react-dom'
import { App } from './components/app'
import './declarations'

const container = document.createElement('div')
document.body.appendChild(container)

render(<App/>, container)
