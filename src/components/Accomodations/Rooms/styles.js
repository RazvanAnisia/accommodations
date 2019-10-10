import styled from 'styled-components';

export const StyledDefault = styled.div`
  color: #ffffff;
  margin-top: 200px;
`;

export const StyledContainer = styled.div`
  background: #08166b;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  padding-left: 20px;
  box-sizing: border-box;
  color: white;
  font-family: sans-serif;

  @media (max-width: 1050px) {
    height: 500px;
    width: 100%;
  }
`;
