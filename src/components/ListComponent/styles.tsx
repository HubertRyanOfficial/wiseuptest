import styled from "styled-components/native";

export const ListContainer = styled.FlatList`
  flex: 1;
`;

export const LoadingListContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingList = styled.ActivityIndicator.attrs({
  color: "#9D25B0",
  size: "large"
})`
  margin-top: 100px;
`;

export const LoadingErrorMessage = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;