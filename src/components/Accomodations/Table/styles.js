import styled from 'styled-components';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export const DataGridWrapper = styled.div`
  height: 1000px;
  overflow-y: scroll;
  width: 50%;
  @media (max-width: 1050px) {
    height: 800px;
    width: 100%;
  }
  .MuiTableCell-root {
    display: table-cell;
    padding: 10px;
  }
  .MuiSvgIcon-root {
    margin-bottom: -7px;
  }
`;

export const MUIHeadTableCell = styled(TableCell)`
  color: white !important;
  cursor: pointer;
  background: #08166b !important;
  font-weight: bold !important;
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
  background: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: #e8e9f4;
  }
`;

export const MUITable = styled(Table)`
  .MuiTableRow-head th {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

export const StyledChevron = styled(KeyboardArrowDownIcon)`
  transform: ${props => (props.direction === 'up' ? 'rotate(180deg)' : '')};
`;

export const StyledAccomName = styled.h4`
  color: #ea067e;
  font-weight: bold;
`;
