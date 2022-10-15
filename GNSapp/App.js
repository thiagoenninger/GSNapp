import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/NavMenu';
import BotaoBot from './src/components/BotaoBot';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
     
  )
}

export default App;