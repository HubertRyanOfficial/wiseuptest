import React, { useCallback, useEffect } from 'react'

// component

import {
  Container,
} from "./styles"

import ButtonComponent from "../../components/ButtonComponent";
import ListComponent from "../../components/ListComponent";
import { ToastAndroid } from 'react-native';

// * modules

import auth from "@react-native-firebase/auth"
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux"
import AsyncStorage from "@react-native-async-storage/async-storage"

// * Types

import { UserRouteNavigationProp } from "../types"
import { InitialStateProps, ReducersType } from "../../config/types"

// * utils

import { updateUserLogged, updateUserListSaga } from "../../config/actions"


interface Props extends InitialStateProps {
  navigation: UserRouteNavigationProp
  updateUserLogged: (value: boolean) => void
  updateUserListSaga: () => void
}

function User({navigation, updateUserLogged, updateUserListSaga, listUsers, failed, loadingListUsers}: Props) {

  useEffect(() => {
    updateUserListSaga();
  }, []);

  const makeSignOut = useCallback(async () => {
    try {
      await auth().signOut();
      await AsyncStorage.removeItem("root");

      updateUserLogged(false)
      ToastAndroid.show("Você saiu da sua conta!", ToastAndroid.BOTTOM)
    } catch (e) {
      if(e && e.code && e.code == "auth/no-current-user") {
        updateUserLogged(false)
      }
    }
  }, [])

  return (
    <Container>

      <ListComponent listUsers={listUsers} failed={failed} loadingListUsers={loadingListUsers} />
      <ButtonComponent name="SAIR" handleFunction={makeSignOut}/> 
    </Container>
  )
}

const mapStateToProps = (state: ReducersType) => {
  return {
    listUsers: state.userReducer.listUsers,
    failed: state.userReducer.failed,
    loadingListUsers: state.userReducer.loadingListUsers
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators({updateUserLogged, updateUserListSaga}, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(User);