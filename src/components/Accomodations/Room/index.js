import React from 'react';

import parse from 'html-react-parser';

import * as data from '../../../utils/accommodation_data.json';
import * as roomData from '../../../utils/accommodation_availability_data.json';

import * as S from './styles';

function Rooms({ roomsData }) {
  return (
    <S.StyledContainer>
      {!roomsData ? (
        <S.StyledDefault>
          Select an accomodation to see available rooms
        </S.StyledDefault>
      ) : (
        roomsData.map(room => (
          <S.StyledRooms>
            <p>Room Name: {room.name}</p>
            <p>Room Type: {room.room_type_description}</p>
            <p>{parse(room.description)}</p>
            <p>Minimum Ocupancy: {room['@min_occupancy']}</p>
            <p>Maximum Ocupancy: {room['@occupancy']}</p>
            <p>Facilities:</p>
            {room.facilities
              ? room.facilities.map(facility => <li>{facility.label}</li>)
              : 'N/A'}
            <br />
            <span>
              Price:
              {room.supplement_price
                ? room.supplement_price.price.price
                : 'N/A'}
            </span>
            <p>
              Number available:
              {roomData.rooms.find(el => el['@id'] === room['@id'])
                ? roomData.rooms.find(el => el['@id'] === room['@id'])[
                    '@available'
                  ]
                : 'SOLD OUT'}
            </p>
            <S.StyledDivider />
          </S.StyledRooms>
        ))
      )}
    </S.StyledContainer>
  );
}

export default Rooms;
