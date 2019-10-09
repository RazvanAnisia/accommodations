import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';

export const DataGridWrapper = styled.div`
  /* @media (max-width: 1430px) {
    .cejTpx .MuiTableRow-head th {
      padding: 20px 8px !important;
    }
    .MuiTableRow-head th {
      font-size: 12px;
    }
    .MuiTableCell-root {
      padding: 10px 1px 19px 7px;
    }
  }
  @media (max-width: 1330px) {
    .cejTpx .MuiTableRow-head th {
      padding: 20px 20px !important;
    }
  }
  .MuiTableCell-root {
    padding: 10px 20px 19px 15px;
  } */
  height: 1000px;
  overflow-y: scroll;
  width: 50%;
`;

export const MUIHeadTableCell = styled(TableCell)`
  color: white !important;
  cursor: pointer;
  background: #08166b !important;
`;

export const MUITableBody = styled(TableBody)`
  background-color: #f2f2f2;
  td {
    border: none !important;
    padding: 14px 5px 14px 16px;
    font-family: interface, sans-serif !important;
  }
`;

export const MUIBodyTableRow = styled(TableRow)`
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #b7beed;
  }
`;

export const MUITable = styled(Table)`
  .MuiTableRow-head th {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const InnerSection = styled.div`
  height: 520px;
  .MuiTableCell-stickyHeader {
    background-color: #3c2bcd;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .os-scrollbar-handle {
    background: #2c2c2c !important;
    width: 8px;
    margin-top: -4px;
  }

  .os-scrollbar-track {
    background: transparent !important;
  }
`;
