import React from 'react'

// * modules

import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

// * stacks

import {LoginStack, UserStack} from "./config";

// * types

import { ReducersType } from "../config/types";

function Routes() {

  const userLogged = useSelector<ReducersType>(state => state.userReducer.loggedIn)

  console.log(userLogged)

  return (
    <NavigationContainer>
      {!userLogged 
        ? 
        <LoginStack /> 
        : 
        <UserStack />
      }
    </NavigationContainer>
  )
}

export default Routes;