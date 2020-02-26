// In App.js in a new project

import * as React from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import DatePicker from 'react-native-date-picker'
import {useState} from 'react';
import { createStore } from 'redux'
//import keleyaApp from './reducers'
//const store = createStore(keleyaApp)
import DueDateScreen from './screens/DueDateScreen'
import FinishScreen from './screens/FinishScreen'
import GoalScreen from './screens/GoalScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import ActivityLevelScreen from './screens/ActivityLevelScreen'



import { SafeAreaView } from 'react-navigation';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
		headerTitle:'',
		headerTransparent:'true',
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
	    <Stack.Screen name="Goals" component={GoalScreen} />
        <Stack.Screen name="DueDate" component={DueDateScreen} />
        <Stack.Screen name="ActivityLevel" component={ActivityLevelScreen} />
        <Stack.Screen name="Finish" component={FinishScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
//         <Stack.Screen name="Home" component={HomeScreen} />
//        <Stack.Screen name="Due date" component={DueDateScreen} />


export default App;
