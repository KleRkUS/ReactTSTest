import styled from "styled-components";

const FilterLabel = styled.label`
  font-size: 1.2em;
  font-weight: 400;
  color: #414141
`;

const FilterInput = styled.input`
  background: #eee;
  border: none;
  border-bottom: .0125em solid #414141;
  color: #414141;
  margin-top: .3em;
  padding: .7em 1.2em;
  
  &::placeholder {
    color: #555555
  }
`;

const FilterWrapper = styled.div`
  width: 1000px;
  margin: 5em auto 0 auto;
`;

export {FilterInput, FilterLabel, FilterWrapper};
