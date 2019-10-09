import * as data from '../../utils/accommodation_data.json';

import React, { useState, useEffect } from 'react';
import Room from '../Room';
import Table from './Table';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  height: 1000px;
  @media (max-width: 1050px) {
    flex-direction: column;
    height: 1500px;
  }
`;

function Accomodations() {
  const [selectedRooms, setSelectedRooms] = useState(null);

  return (
    <StyledWrapper>
      <Table setSelectedRooms={setSelectedRooms} data={data.accommodations} />
      <Room roomsData={selectedRooms} />
    </StyledWrapper>
  );
}

export default Accomodations;
