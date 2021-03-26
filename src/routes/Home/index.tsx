import React, {useState, useCallback} from 'react';
import { ToastAndroid } from "react-native";

// component

import {
  Container,
  Title,
  SubTitle,
  InputsContainer,
  LoadingComponent,
} from "./styles"

import InputComponent from "../../components/InputComponent"
import ButtonComponent from "../../components/ButtonComponent"

// modules

import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux";
import auth from "@react-native-firebase/auth";

// * Types

import { HomeRouteNavigationProp } from "../types";

// * Actions

import { updateUserLogged } from "../../config/actions"

interface Props {
  navigation: HomeRouteNavigationProp;
  updateUserLogged: (value: boolean) => void
}

// 

function Home({navigation, updateUserLogged}: Props) {

  const [emailInput, setEmailInput] = useState("wiseuptest_hubertryan@gmail.com");
  const [emailFail, setEmailFail] = useState(false);

  const [passwordInput, setPasswordInput] = useState("123456");
  const [passwordFail, setPasswordFail] = useState(false);

  const [loading, setLoading] = useState(false);

  const makeLogin = useCallback(async () => {

    setLoading(true);

    try {


      // + Clear inputs faild

      setEmailFail(false)
      setPasswordFail(false)

      // + logic to invalid infos

      if(!passwordInput || !emailInput || passwordInput.length === 0 || emailInput.length === 0) {
        setLoading(false)
        return;
      };

      
      if(emailInput && !emailInput.includes(".") && !emailInput.includes("@")) {
        throw "Email invalid";
      }

      if(passwordInput && passwordInput.length < 5) {
        throw "Password curt";
      }

      console.log("PASSWORD VALID");

      if(emailInput && passwordInput) {

        console.log("AUTH COMPLETED")
        console.log(`EMAIL: ${emailInput}`)
        console.log(`SENHA: ${passwordInput}`)

        // + make login with auth firebase

        authCompleted();
      }

    } catch (e) {
      
      switch(e){
        case "Email invalid":
          setEmailFail(true);
          break;
        case "Password curt":
          setPasswordFail(true);
        default:
          break;
      }
      setLoading(false);
    } 

  }, [emailInput, passwordInput, loading])

  const authCompleted = useCallback(() => {
    auth().signInWithEmailAndPassword(emailInput, passwordInput)
    .then(() => {

      updateUserLogged(true);
      ToastAndroid.show("Login feito com exito!", ToastAndroid.BOTTOM)

    }).catch(e => {

      if(e && e.code){
        switch(e.code) {
          case "auth/user-not-found":
            ToastAndroid.show("Este usuário não existe, tente novamente!", ToastAndroid.BOTTOM);
            setEmailFail(true);
            break;
          case "auth/wrong-password":
            ToastAndroid.show("Senha incorreta!", ToastAndroid.BOTTOM);
            setPasswordFail(true)
            break;
          default:
            break;
        }
      }

    }).finally(() => setLoading(false))
  }, [emailInput, passwordInput])


  return (
  <Container>
    <Title>Olá, seja bem-vindo!</Title>
    <SubTitle>Para acessar a plataforma, faça seu login.</SubTitle>

    <InputsContainer>
      <InputComponent 
        name="E-MAIL"
        placeholder="user.name@mail.com"
        text={emailInput} 
        setText={setEmailInput} 
        fail={emailFail}
      />
      <InputComponent 
        name="SENHA"
        placeholder="**********"
        text={passwordInput} 
        setText={setPasswordInput} 
        secureTextEntry={true}
        fail={passwordFail}
      />
    </InputsContainer>

    {loading 
      ?
      <LoadingComponent />
      : 
      <ButtonComponent name="ENTRAR" handleFunction={makeLogin}/> 
    }
  </Container>
  )
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators({updateUserLogged}, dispatch)
})

export default connect(null, mapDispatchToProps)(Home);
