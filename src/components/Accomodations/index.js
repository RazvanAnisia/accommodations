import * as data from '../../utils/accommodation_data.json';

import React, { useState, useEffect } from 'react';
import Room from '../Room';
import Table from './Table';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  height: 1000px;
`;

function Accomodations() {
  const [selectedRooms, setSelectedRooms] = useState(null);

  useEffect(() => {
    console.log(selectedRooms);
  }, [selectedRooms]);
  return (
    <StyledWrapper>
      <Table setSelectedRooms={setSelectedRooms} data={data.accommodations} />
      <Room roomsData={selectedRooms} />
    </StyledWrapper>
  );
}

export default Accomodations;
