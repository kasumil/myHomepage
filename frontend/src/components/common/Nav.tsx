import React from 'react';
import styled from 'styled-components';

const NavBlock = styled.div`
  width: 100%;
`;

const NavListBundle = styled.ul`
  display: flex;
  justify-content: center;
`;

const NavListItem = styled.li`
  margin: 1rem;
`;

const Nav = () => {
  return (
    <NavBlock >
      <NavListBundle>
        <NavListItem>송수호</NavListItem>
        <NavListItem>소개</NavListItem>
        <NavListItem>사진</NavListItem>
        <NavListItem>GIT</NavListItem>
        <NavListItem>기술블로그</NavListItem>
        <NavListItem>Youtube</NavListItem>
      </NavListBundle>
    </NavBlock>
  );
};

export default Nav;