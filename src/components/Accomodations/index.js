import React from 'react';

import parse from 'html-react-parser';
import ReactPaginate from 'react-paginate';

import * as data from '../../utils/accommodation_data.json';

function Accomodations() {
  return (
    <div>
      {data.accommodations.map(accomodation => (
        <div>
          <h4>{accomodation.name}</h4>
          <p>{accomodation.type.name}</p> Rating:
          <strong>{accomodation.rating.label[0]}</strong>
          <p>Resort: {accomodation.resort.name}</p>
          <p>Address:</p>
          <span>{accomodation.address_1 && accomodation.address_1} </span>
          <span>{accomodation.address_2 && accomodation.address_2} </span>
          <span>{accomodation.address_3 && accomodation.address_3} </span>
          <span>{accomodation.postcode && accomodation.postcode} </span>
          <strong>
            {accomodation.country.name && accomodation.country.name}
          </strong>
          <br />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${
              accomodation.location['@location_lat']
            },${accomodation.location['@location_long']}`}
            target="_blank">
            Directions
          </a>
          <div>{parse(accomodation.description)}</div>
          <p>Facilities:</p>
          {accomodation.facilities.map(facility => (
            <li>{facility.label}</li>
          ))}
        </div>
      ))}
    </div>
  );
}

console.log(data.accommodations);

export default Accomodations;
