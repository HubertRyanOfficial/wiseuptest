import React from "react";
import {TouchableOpacity} from "react-native";

import {Container, Name} from "./styles"

interface Props {
  name: string,
  handleFunction: () => void;
}

const ButtonComponent: React.FC<Props> = ({name, handleFunction}) => {
  return(
    <TouchableOpacity onPress={() => handleFunction()}>
      <Container>
        <Name>{name}</Name>
      </Container>
    </TouchableOpacity>
  )
}

export default ButtonComponent;