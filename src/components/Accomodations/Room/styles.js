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
  padding: 20px;
  color: white;
  @media (max-width: 1050px) {
    height: 500px;
    width: 100%;
  }
`;

export const StyledRooms = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 30px 0;
  height: auto;
  width: 100%;
`;

export const StyledDivider = styled.div`
  height: 2px;
  width: 90%;
  background: white;
`;
