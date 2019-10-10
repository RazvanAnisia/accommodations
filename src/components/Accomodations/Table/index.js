import React, { useState } from 'react';

import parse from 'html-react-parser';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import * as S from './styles';

const columnsHeaders = ['Details', 'Type', 'Rating'];

export default function Table({ data, setSelectedRooms, scrollAnim }) {
  const [sortedData, setSortedData] = useState(data);
  const [sortedDirection, setSortedDirection] = useState(false);

  const handleTHeadClick = parameter => {
    console.log(parameter);
    console.log(sortedDirection);
    if (parameter === 'Type') {
      setSortedData(sortByType(sortedDirection));
      setSortedDirection(!sortedDirection);
    }
  };

  const handleAccomClick = rooms => {
    setSelectedRooms(rooms);
    scrollAnim();
  };

  const sortByType = isDescending => {
    let firstSort = sortedData.slice().sort(function(a, b) {
      if (a.type.name < b.type.name) {
        return -1;
      }
      if (a.type.name > b.type.name) {
        return 1;
      }
      return 0;
    });
    return isDescending ? firstSort.reverse() : firstSort;
  };

  return (
    <S.DataGridWrapper>
      <S.MUITable stickyHeader>
        <TableHead style={{ background: 'red' }}>
          <TableRow>
            {columnsHeaders.map((header, index) => (
              <S.MUIHeadTableCell
                key={`TableHeadCell${index}`}
                onClick={() => handleTHeadClick(header)}>
                {header}
                {header === 'Type' ? (
                  <S.StyledChevron
                    direction={sortedDirection ? 'up' : 'down'}
                  />
                ) : null}
              </S.MUIHeadTableCell>
            ))}
          </TableRow>
        </TableHead>
        <S.MUITableBody>
          {sortedData.map(accomodation => (
            <S.MUIBodyTableRow
              key={accomodation['@id']}
              onClick={() => handleAccomClick(accomodation.rooms)}>
              <TableCell>
                <S.StyledAccomName>{accomodation.name}</S.StyledAccomName>
                <p>Resort: {accomodation.resort.name}</p>
                <div>{parse(accomodation.description)}</div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${
                    accomodation.location['@location_lat']
                  },${accomodation.location['@location_long']}`}
                  rel="noopener noreferrer"
                  target="_blank">
                  Directions
                </a>
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
              <TableCell>
                {accomodation.rating.label === 'N/A'
                  ? accomodation.rating.label
                  : accomodation.rating.label[0]}
              </TableCell>
            </S.MUIBodyTableRow>
          ))}
        </S.MUITableBody>
      </S.MUITable>
    </S.DataGridWrapper>
  );
}
