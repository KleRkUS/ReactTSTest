import styled from "styled-components";

const AuthorContainer = styled.div`
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0;
      margin-bottom: 1em;
      font-weight: 300;
    `,
    AuthorInner = styled.div`
      text-align: left;
    `,
    AuthorUsername = styled.h2`
      margin: 0;
    `,
    AuthorName = styled.span`
      margin: .5em 0 0 0;
    `,
    PostContent = styled.div`
      text-align: left;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-weight: 300;
      
      p {
        margin: 0;
      }
    `,
    PostTitle = styled.h3`
      font-size: 1.4em;
      font-weight: 400;
      margin-bottom: .7em;
      margin-top: 0;
      margin-right: auto;
    `;

export {AuthorContainer, AuthorInner, AuthorUsername, AuthorName, PostContent, PostTitle};