import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  height: 1000px;
  @media (max-width: 1050px) {
    flex-direction: column;
    height: 1500px;
  }
`;
