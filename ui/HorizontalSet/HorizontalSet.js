import styled from "styled-components";

const HorizontalSet = styled.div`
  display: flex;

  & > * {
    margin-right: 0.5rem;
    padding-right: 0.5rem;
    border-right: 1px solid black;

    &:last-child {
      border-right: 1px solid transparent;
    }
  }
`;

export default HorizontalSet;
