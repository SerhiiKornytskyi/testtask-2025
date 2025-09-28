import styled from "styled-components";
import { Link} from '@tanstack/react-router'

export const StyledPaginator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 25px;
  font-size: 20px;
  width: 100%;
  height: 55px;
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  bottom: 0;
  
`;

export const StyledPaginatorItem = styled(Link)<{ visible: boolean }>`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;


