import React from "react";

import {
  Container,
  UserAvatar,
  UserName,
} from "./styles"

// * types

import { UserListProps } from "../../config/types"

interface Props {
  user: UserListProps
}

function UserListComponent({user}: Props) {

  return(
    <Container>
      <UserAvatar source={{uri: user.avatar}} />
      <UserName>{user.name}</UserName>
    </Container>
  )
}

export default UserListComponent;