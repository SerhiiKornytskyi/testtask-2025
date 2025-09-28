import styled from "styled-components";
import {Link} from '@tanstack/react-router'

export const StyledSearchResults = styled.div`
  background-color: darkslategray;
  flex-grow: 3;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
`;

export const StyledSearchResultCardContainer = styled.div`
  flex: 0 0 26%;
  background-color: #535bf2;
  margin: 2%;
  height: auto;
`;

export const StyledResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`;

export const StyledResultDetail = styled.div`
  background-color: #1c440f;
`;

export const StyledSearchResultCard = styled(Link)`
  background-color: #000;
  display: block;
  box-sizing: border-box;
  padding: 10px;
  max-width: 100%;
  text-align: center;
  img {
    width: 75px;
    height: 75px;
    display: inline-block;
    margin-bottom: 10px;
  }
  span {
    color: white;
  }
`;
