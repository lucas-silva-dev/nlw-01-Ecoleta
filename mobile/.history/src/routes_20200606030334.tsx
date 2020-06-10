import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Points from "./pages/Points";

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen component={Home} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
