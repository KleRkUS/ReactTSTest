import styled from 'styled-components';

const PaginationList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin: 3em auto;
  user-select: none;
`;

const PaginationElem = styled.li`
  padding: .5em .7em;
  margin-right: .4em;
  background: transparent;
  transition: all .2s ease-in-out;
  border-radius: .3em;
  font-size: 1em;
  font-weight: 400;
  border: .0125em solid #eee;
  list-style: none;
  cursor: pointer;
  margin-bottom: .5em;
  
  &:last-child{
    margin-right: 0;
  }
    
  &:hover {
    border: .0125em solid #414141;
    background: #414141;
    color: #eee
  }
`;

const PaginationActiveElem = styled(PaginationElem)`
    border: .0125em solid #414141;
    background: #414141;
    color: #eee
`;

export {PaginationList, PaginationElem, PaginationActiveElem};
