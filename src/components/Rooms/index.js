import React from 'react';

import parse from 'html-react-parser';

import * as data from '../../utils/accommodation_data.json';
import * as roomData from '../../utils/accommodation_availability_data.json';

function Rooms() {
  return (
    <>
      {data.accommodations.map(accommodation => (
        <div>
          {accommodation.rooms.map(room => (
            <>
              <p>Room Name: {room.name}</p>
              <p>Room type: {room.room_type_description}</p>
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
            </>
          ))}
        </div>
      ))}
      <div></div>
    </>
  );
}

export default Rooms;
