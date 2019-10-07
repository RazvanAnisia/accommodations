import React from 'react';

import parse from 'html-react-parser';
import ReactPaginate from 'react-paginate';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import * as data from '../../utils/accommodation_data.json';

function Accomodations() {
  const newTable = data.accommodations.map(accommodation => {
    return {
      acc_details: [
        accommodation.name,
        accommodation.resort.name,
        parse(accommodation.description),
        [
          accommodation.address_1,
          accommodation.address_2,
          accommodation.address_3,
          accommodation.country.name,
          accommodation.postcode
        ],
        accommodation.location['@location_lat'],
        accommodation.location['@location_long']
      ],
      //acc_facilities: accommodation.facilities,
      acc_rating: accommodation.rating.label[0],
      acc_type: accommodation.type.name

      //
    };
  });

  console.log(newTable);
  const columns = [
    {
      Header: ' Accommodation',
      accessor: 'acc_details',
      render: accommodation => (
        <>
          <h4>{accommodation[0]}</h4>
          <p>Resort: {accommodation[1]}</p>
          <p>{accommodation[2]}</p>
          {accommodation[3].map(el => (
            <span>{el + ' '} </span>
          ))}
          {/* <ul>
            {accommodation[3].length > 0 &&
              accommodation[3].map(facility => <li>{facility}</li>)}
          </ul> */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${
              accommodation[5]
            },${accommodation[6]}`}
            target="_blank">
            Directions
          </a>
        </>
      )
    },
    {
      Header: 'Rating',
      accessor: 'acc_rating'
    },
    {
      Header: 'Type',
      accessor: 'acc_type'
    },
    {
      Header: 'Facilities',
      accessor: 'acc_facilities'
    },
    {
      Header: 'Directions',
      accessor: 'acc_directions',
      render: value => (
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${
            value['@location_lat']
          },${value['@location_long']}`}
          target="_blank">
          Directions
        </a>
      )
    }
  ];
  return (
    <div>
      <ReactTable
        defaultPageSize={10}
        minRows={1}
        data={newTable}
        columns={columns}
      />

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
