import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from "@react-navigation/native";

//* Type from Login Stack

export type LoginStackParamList = {
  Home: undefined;
};

export type HomeRouteNavigationProp = StackNavigationProp<LoginStackParamList, "Home">;

//* Type from User Stack

export type UserStackParamList = {
  User: undefined
}

export type UserRouteNavigationProp = StackNavigationProp<UserStackParamList,"User">;