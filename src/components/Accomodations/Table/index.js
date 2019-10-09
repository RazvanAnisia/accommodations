import React, { useState, useEffect } from 'react';

import parse from 'html-react-parser';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import * as S from './styles';

const columnsHeaders = ['Details', 'Type', 'Country', 'Rating', 'Directions'];

export default function Table({ data, setSelectedRooms }) {
  const [sortedData, setSortedData] = useState(data);

  const handleAccomClick = rooms => {
    setSelectedRooms(rooms);
    console.log(rooms);
  };

  return (
    <S.DataGridWrapper>
      <S.MUITable stickyHeader>
        <TableHead style={{ background: 'red' }}>
          <TableRow>
            {columnsHeaders.map((header, index) => (
              <S.MUIHeadTableCell key={`TableHeadCell${index}`}>
                {header}{' '}
              </S.MUIHeadTableCell>
            ))}
          </TableRow>
        </TableHead>
        <S.MUITableBody>
          {sortedData.map(accomodation => (
            <S.MUIBodyTableRow
              key={accomodation['@key']}
              onClick={() => handleAccomClick(accomodation.rooms)}>
              <TableCell>
                <h4>{accomodation.name}</h4>
                <p>Resort: {accomodation.resort.name}</p>
                <div>{parse(accomodation.description)}</div>
                <p>Address:</p>
                <span>{accomodation.address_1 && accomodation.address_1} </span>
                <span>{accomodation.address_2 && accomodation.address_2} </span>
                <span>{accomodation.address_3 && accomodation.address_3} </span>
                <span>{accomodation.postcode && accomodation.postcode} </span>
                <strong>
                  {accomodation.country.name && accomodation.country.name}
                </strong>
                <br />
                <p>Facilities:</p>
                {accomodation.facilities.map(facility => (
                  <li key={facility['@id']}>{facility.label}</li>
                ))}
              </TableCell>
              <TableCell>{accomodation.type.name}</TableCell>
              <TableCell>{accomodation.rating.label[0]}</TableCell>
              <TableCell>
                <strong>
                  {accomodation.country.name && accomodation.country.name}
                </strong>
              </TableCell>
              <TableCell>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${
                    accomodation.location['@location_lat']
                  },${accomodation.location['@location_long']}`}
                  target="_blank">
                  Directions
                </a>
              </TableCell>
            </S.MUIBodyTableRow>
          ))}
        </S.MUITableBody>
      </S.MUITable>
    </S.DataGridWrapper>
  );
}
