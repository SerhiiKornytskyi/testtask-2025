import styled from "styled-components";
import { Link} from '@tanstack/react-router'

export const StyledPaginator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 25px;
  font-size: 20px;
`;

export const StyledPaginatorItem = styled(Link)`
`;

