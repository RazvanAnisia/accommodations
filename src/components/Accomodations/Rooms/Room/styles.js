import styled from 'styled-components';

import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import HotelIcon from '@material-ui/icons/Hotel';
import RoomServiceIcon from '@material-ui/icons/RoomService';

export const StyledRooms = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 30px 0;
  height: auto;
  width: 100%;
  font-family: sans-serif;
`;

export const StyledDivider = styled.div`
  height: 2px;
  width: 90%;
  background: white;
`;

export const StyledRoomDetail = styled.p`
  font-weight: 600;
`;

export const StyledRoomPrice = styled.p`
  font-weight: 600;
  color: #ea067e;
  font-weight: bold;
`;

export const StyledTicketIcon = styled(ConfirmationNumberIcon)`
  color: #ea067e;
`;

export const StyledRoomIcon = styled(RoomServiceIcon)`
  color: #ea067e;
`;

export const StyledHotelIcon = styled(HotelIcon)`
  color: #ea067e;
`;
