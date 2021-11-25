import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import RootNavigation from './navigation/root-navigation'
import store from './redux/root-store'
import RootScreen from './screens'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </Provider>

    )
  }
}
