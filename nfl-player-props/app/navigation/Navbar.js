import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
//Screens
import friends from './screens/friends';
import leaderboard from './screens/leaderboard';
import profile from './screens/profile';
import stats from './screens/stats';
import swiping from './screens/swiping';
//Screen Names
const friendsName = 'Friends'; 
const leaderboardName = 'Leaderboard';
const profileName = 'Profile';
const statsName = 'Stats';
const swipingName = 'Swiping';

const Tab = createBottomTabNavigator();


const Navbar = () => {
  return (
        <NavigationContainer
          independent={true}
        >
            <Tab.Navigator
              initialRoute={friends}
              screenOptions={({route}) => ({
                  tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === friendsName){
                      iconName = focused ? "people" : "people-outline";
                    }
                    else if (rn === leaderboardName){
                      iconName = focused ? "medal" : "medal-outline";
                    }
                    else if (rn === profileName){
                      iconName = focused ? "person" : "person-outline";
                    }
                    else if (rn === statsName){
                      iconName = focused ? "bar-chart" : "bar-chart-outline";
                    }
                    else if (rn === swipingName){
                      iconName = focused ? "star" : "star-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                  },
              })}
            >
              <Tab.Screen name={friendsName} component={friends}/>
              <Tab.Screen name={leaderboardName} component={leaderboard}/>
              <Tab.Screen name={profileName} component={profile}/>
              <Tab.Screen name={statsName} component={stats}/>
              <Tab.Screen name={swipingName} component={swiping}/>
            </Tab.Navigator>
        </NavigationContainer>
  )
}

export default Navbar