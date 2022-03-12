import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  min-width: 200px;
  min-height: 100vh;
  background: #7b9bb1;
  text-align: center;

  > p {
    margin-top: 36px;
    cursor: pointer;
  }
`;

export const StyledUl = styled.ul`
  padding: 0;

  li {
    list-style-type: none;
    margin-top: 10px;
    cursor: pointer;
    padding: 0;
  }
`;
