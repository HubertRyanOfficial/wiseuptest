import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient"

export const Container = styled(LinearGradient).attrs({
  colors: [
    "#383E71",
    "#9D25B0"
  ],
  start:{x: 1, y: 0},
  end:{x: 0, y: 0}
})`
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
`

export const Name = styled.Text`
  font-size: 18px;
  color: #fff;
`;