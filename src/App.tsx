/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import WeatherScreen from './screens/WeatherScreen';

function App(props: any): React.JSX.Element {
  console.log('props: ', props);
  return <WeatherScreen />;
}

export default App;
