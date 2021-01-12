import styled, {keyframes} from 'styled-components';

const MainContainer = styled.div`
    font-family: 'Montserrat', sans-serif;
  `;

const MainSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
    display: flex;
    width: 100vw;
    box-sizing: border-box;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

const SpinnerInner = styled.span`
    font-size: 2em;
    animation: ${rotate} 2s linear infinite;
`;

export {MainSection, Spinner, SpinnerInner, MainContainer};
