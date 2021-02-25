import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleMenuBlock = styled.div``;

const ToggleMove = styled.img``;

const Menu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <ToggleMenuBlock>
      <ToggleMove src='' />
    </ToggleMenuBlock>
  )
};

export default Menu;