import styled from 'styled-components/native';

// * types

import { Props } from "./index"

export const Container = styled.View`
  margin-top: 20px;
`;

export const InputTitle = styled.Text`
  font-size: 14px;
  color: #383e71;
  margin-left: 10px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#989FDB',
})`
  font-size: 16px;
  color: #000;
  border: solid;
  border-width: ${(props: Props) => props.fail ? "2px" : "1px"};
  border-color: ${(props: Props) => props.fail ? "red" : "#989fdb"};
  padding: 15px 20px;
  border-radius: 10px;
  margin-top: 10px;
`;