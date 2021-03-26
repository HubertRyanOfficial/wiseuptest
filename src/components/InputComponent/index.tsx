import React from 'react';

// component

import {
  Container,
  InputTitle,
  Input
} from "./styles"

export interface Props {
  name: string;
  text: string;
  placeholder: string;
  setText: (value: string) => void | undefined;
  secureTextEntry?: boolean;
  fail: boolean
}

const InputComponent: React.FC<Props> = ({
  name, 
  text, 
  setText, 
  placeholder, 
  secureTextEntry = false,
  fail = false
}) => {
  return (
  <Container>
    <InputTitle>{name}</InputTitle>
    <Input 
      value={text}
      onChangeText={(text: string) => setText(text)} 
      placeholder={placeholder} 
      secureTextEntry={secureTextEntry}
      fail={fail}
    />
  </Container>
  )
};


export default InputComponent;
