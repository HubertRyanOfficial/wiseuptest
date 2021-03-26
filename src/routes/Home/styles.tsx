import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 0px 20px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #383e71;
  font-size: 40px;
  max-width: 200px;
`;

export const SubTitle = styled.Text`
  color: #989FDB;
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
  max-width: 250px;
`;

export const InputsContainer = styled.View`
  margin-top: 20px;
`;

export const LoadingComponent = styled.ActivityIndicator.attrs({
  color: "#383e71",
  size: "large"
})`
  margin-top: 30px;
`;