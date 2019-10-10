import React from 'react';

import parse from 'html-react-parser';
import * as roomData from '../../../../utils/accommodation_availability_data.json';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import HotelIcon from '@material-ui/icons/Hotel';
import RoomServiceIcon from '@material-ui/icons/RoomService';

import * as S from './styles';

const Room = ({ room }) => {
  return (
    <S.StyledRooms>
      <HotelIcon />
      <S.StyledRoomDetail>Room Name: {room.name}</S.StyledRoomDetail>

      <S.StyledRoomDetail>
        Room Type: {room.room_type_description}
      </S.StyledRoomDetail>
      <S.StyledRoomDetail>Description:</S.StyledRoomDetail>
      <ConfirmationNumberIcon />
      {parse(room.description)}
      <S.StyledRoomDetail>
        Minimum Ocupancy: {room['@min_occupancy']}
      </S.StyledRoomDetail>
      <S.StyledRoomDetail>
        Maximum Ocupancy: {room['@occupancy']}
      </S.StyledRoomDetail>
      <RoomServiceIcon />
      <S.StyledRoomDetail>Facilities:</S.StyledRoomDetail>
      {room.facilities
        ? room.facilities.map(facility => (
            <li key={facility['@id']}>{facility.label}</li>
          ))
        : 'N/A'}
      <br />
      <S.StyledRoomDetail>
        Price:
        {room.supplement_price ? room.supplement_price.price.price : 'N/A'}
      </S.StyledRoomDetail>
      <S.StyledRoomDetail>
        Number available:{' '}
        {roomData.rooms.find(el => el['@id'] === room['@id'])
          ? roomData.rooms.find(el => el['@id'] === room['@id'])['@available']
          : 'SOLD OUT'}
      </S.StyledRoomDetail>
      <S.StyledDivider />
    </S.StyledRooms>
  );
};

export default Room;
