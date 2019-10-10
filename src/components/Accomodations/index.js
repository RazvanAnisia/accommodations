import * as data from '../../utils/accommodation_data.json';

import React, { useState, useEffect } from 'react';
import Rooms from './Rooms';
import Table from './Table';

import * as S from './styles';

function Accomodations() {
  const [selectedRooms, setSelectedRooms] = useState(null);

  return (
    <S.StyledWrapper>
      <Table setSelectedRooms={setSelectedRooms} data={data.accommodations} />
      <Rooms roomsData={selectedRooms} />
    </S.StyledWrapper>
  );
}

export default Accomodations;
