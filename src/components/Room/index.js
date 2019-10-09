import React from 'react';

import parse from 'html-react-parser';

import * as data from '../../utils/accommodation_data.json';
import * as roomData from '../../utils/accommodation_availability_data.json';

import styled from 'styled-components';

const StyledDefault = styled.div`
  color: #ffffff;
  margin-top: 200px;
`;
const StyledContainer = styled.div`
  background: #08166b;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
  padding: 20px;
  color: white;
  @media (max-width: 1050px) {
    height: 500px;
    width: 100%;
  }
`;

const StyledRooms = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 30px 0;
  height: auto;
  width: 100%;
`;

const StyledDivider = styled.div`
  height: 2px;
  width: 90%;
  background: white;
`;

function Rooms({ roomsData }) {
  return (
    <StyledContainer>
      {!roomsData ? (
        <StyledDefault>
          Select an accomodation to see available rooms
        </StyledDefault>
      ) : (
        roomsData.map(room => (
          <StyledRooms>
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
            <StyledDivider />
          </StyledRooms>
        ))
      )}
    </StyledContainer>
  );
}

export default Rooms;
