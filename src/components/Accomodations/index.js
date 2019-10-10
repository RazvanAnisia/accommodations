import * as data from '../../utils/accommodation_data.json';

import React, { useState, useEffect } from 'react';
import Room from './Room';
import Table from './Table';

import * as S from './styles';

function Accomodations() {
  const [selectedRooms, setSelectedRooms] = useState(null);

  return (
    <S.StyledWrapper>
      <Table setSelectedRooms={setSelectedRooms} data={data.accommodations} />
      <Room roomsData={selectedRooms} />
    </S.StyledWrapper>
  );
}

export default Accomodations;
