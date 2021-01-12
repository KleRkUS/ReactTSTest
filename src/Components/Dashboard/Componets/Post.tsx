import React from "react";
import styled from "styled-components";

import {FetchData} from "../../../Modules/Interfaces";
import {AuthorContainer, AuthorInner, AuthorUsername, AuthorName, PostContent, PostTitle} from "../../../Styles/Post";

type PostProps = {
    user: FetchData,
    postData:FetchData,
    index:number
}

const Post = ({user, postData, index}: PostProps) => {

    const Container = styled.div`
      width: 48%;
      box-sizing: border-box;
      padding: 2em;
      background: ${index % 2 === 0 ? "#eee" : "#414141"}; 
      color: ${index % 2 === 0 ? "#414141" : "#eee"};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 3em;
      
      &:last-child, &:nth-last-child(-n+2) {
        margin-bottom: 0;
      }
    `;

    const {username, name} = user;

    return (
        <Container>
            <AuthorContainer>
                <AuthorInner>
                    <AuthorUsername>{username}</AuthorUsername>
                    <AuthorName>{name}</AuthorName>
                </AuthorInner>
            </AuthorContainer>

            <PostContent>
                <PostTitle>{postData.title}</PostTitle>
                <p>{postData.body}</p>
            </PostContent>
        </Container>
    )
};


export default Post;