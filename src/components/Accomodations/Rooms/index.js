import React from 'react';

import Room from './Room';
import * as data from '../../../utils/accommodation_data.json';

import * as S from './styles';

const Rooms = ({ roomsData }) => {
  return (
    <S.StyledContainer>
      {!roomsData ? (
        <S.StyledDefault>
          Select an accomodation to see available rooms
        </S.StyledDefault>
      ) : (
        roomsData.map(room => <Room room={room} />)
      )}
    </S.StyledContainer>
  );
};

export default Rooms;
