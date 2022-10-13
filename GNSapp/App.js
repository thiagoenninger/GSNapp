import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from "./src/routes";
import Tabs from './src/components/NavMenu';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
     
  )
}

export default App;