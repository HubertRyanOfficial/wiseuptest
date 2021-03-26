import React, {memo} from "react";

// * components

import {
  ListContainer,
  LoadingListContainer,
  LoadingList,
  LoadingErrorMessage
} from "./styles";

import UserListComponent from '../UserListComponent';

// * types

import { UserListProps } from "../../config/types"

interface OwnProps {
  listUsers: UserListProps[];
  loadingListUsers: boolean;
  failed: boolean
}

function ListComponent({listUsers, loadingListUsers, failed}: OwnProps) {

  if(loadingListUsers && !failed) {
    return (
      <LoadingListContainer>
        <LoadingList /> 
      </LoadingListContainer>
    )
  }
  
  if (!loadingListUsers && failed) {
    return(
      <LoadingListContainer>
        <LoadingErrorMessage>Houve um error!</LoadingErrorMessage>
      </LoadingListContainer>
    )
  } 

  if(!loadingListUsers && !failed) {
    return (
      <ListContainer 
        data={listUsers}
        renderItem={({item}: any) => <UserListComponent user={item} />}
        keyExtractor={(item: any) => item.id}
      />
    );
  }

  return null;  
}

export default memo(ListComponent);