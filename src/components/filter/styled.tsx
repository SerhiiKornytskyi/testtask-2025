import styled from "styled-components";

export const StyledFilterWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: space-between;
  position: fixed;
  min-height: 50px;
  max-height: 100px;
  left: 0;
  top: 0;
  max-width: 100%;
  padding: 5px 20px;

  select, input, button {
    background-color: rgba(0, 90, 1, 0.8);
    margin: 0 3px;
  }

  button {
    padding: 3px 5px;
    box-sizing: border-box;
    &.clear {
      background-color: rgba(158, 15, 15, 0.8);
    }
    &.refetch {
      background-color: rgba(158, 158, 15, 0.8);
    }
    
  }
`;
