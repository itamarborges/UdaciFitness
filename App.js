import React from 'react';
import { View } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';


export default class App extends React.Component {

  render() {
    const store = createStore(
     reducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AddEntry />
        </View>
      </Provider>
    );
  }
}
