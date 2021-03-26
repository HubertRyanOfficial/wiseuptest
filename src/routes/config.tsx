import React from "react";

// * modules

import { createStackNavigator } from "@react-navigation/stack";

// * Types

import { LoginStackParamList, UserStackParamList } from "./types";

// * routes

import Home from "./Home";
import User from "./User"

// * utils

const LoginStackContainer = createStackNavigator<LoginStackParamList>();
const UserStackContainer = createStackNavigator<UserStackParamList>();

export function LoginStack() {
  return(
    <LoginStackContainer.Navigator initialRouteName={"Home"} screenOptions={{
      headerShown: false
    }}>
      <LoginStackContainer.Screen name="Home" component={Home}/>
    </LoginStackContainer.Navigator>
  )
}

export function UserStack() {
  return(
    <UserStackContainer.Navigator initialRouteName={"User"} screenOptions={{
      headerShown: false
    }}>
      <UserStackContainer.Screen name="User" component={User}/>
    </UserStackContainer.Navigator>
  )
}