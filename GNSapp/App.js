import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from "./src/routes";
import Tabs from './src/components/NavMenu';
import BotaoBot from './src/components/BotaoBot';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
      <BotaoBot/>
    </NavigationContainer>
     
  )
}

export default App;