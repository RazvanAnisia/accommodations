import React from 'react';

import Room from './Room';

import * as S from './styles';

const Rooms = ({ roomsData }) => {
  return (
    <S.StyledContainer>
      {!roomsData ? (
        <S.StyledDefault>
          Select an accomodation to see available rooms
        </S.StyledDefault>
      ) : (
        roomsData.map(room => <Room key={room['@id']} room={room} />)
      )}
    </S.StyledContainer>
  );
};

export default Rooms;
