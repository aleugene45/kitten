import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from './app/store';
import NetInfo from './app/src/components/NetInfo/NetInfo';
import {AppNavigator} from './app/stack'

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (<Provider store={store}>
      <PersistGate persistor={persistor}>
        <NetInfo/>
        <AppContainer />
      </PersistGate>
    </Provider>)
  }
}
