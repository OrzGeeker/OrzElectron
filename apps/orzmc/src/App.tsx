import React, { Component } from 'react'

import Container from 'components/Container'
import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
