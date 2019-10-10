import * as data from '../../utils/accommodation_data.json';

import React, { useState, useRef } from 'react';
import Rooms from './Rooms';
import Table from './Table';

import * as S from './styles';

function Accomodations() {
  const [selectedRooms, setSelectedRooms] = useState(null);
  const roomRef = useRef();

  const scrollAnim = () => {
    roomRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return (
    <S.StyledWrapper>
      <Table
        setSelectedRooms={setSelectedRooms}
        data={data.accommodations}
        scrollAnim={scrollAnim}
      />
      <span ref={roomRef}></span>
      <Rooms roomsData={selectedRooms} />
    </S.StyledWrapper>
  );
}

export default Accomodations;
