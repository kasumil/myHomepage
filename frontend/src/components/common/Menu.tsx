import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleMenuBlock = styled.div``;

const ToggleMove = styled.img`
`;

const ModalWrap = styled.div``;

const ModalList = styled.ul``;

const ModalContent = styled.li``;

const ModalState = styled.button``;

const Menu = () => {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);
  console.log(toggle);
  return (
    <ToggleMenuBlock>
      {visible ? null : <ModalState onClick={() => setVisible(true)}>메뉴</ModalState>}
      {visible ? <ModalState onClick={() => setVisible(false)}>X</ModalState> : null}
      {visible &&
        <ModalWrap>
          <ModalList>
            <ModalContent>송수호</ModalContent>
            <ModalContent>소개</ModalContent>
            <ModalContent>사진</ModalContent>
            <ModalContent>기술블로그</ModalContent>
            <ModalContent>Youtube</ModalContent>
          </ModalList>
        </ModalWrap>
      }
    </ToggleMenuBlock>
  )
};

export default Menu;