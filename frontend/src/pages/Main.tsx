import React, { Fragment } from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScriptTypo = styled.div`
  font-weight: 800;
  font-size: 40px;
`;

const ImgBlock = styled.img`
`;

const Main = () => {
  return (
    <Fragment>
      <MainBlock>
        <ImgBlock src="/images/main.jpg" alt="펭수사진" />
        <ScriptTypo>환영합니다.</ScriptTypo>
        <ScriptTypo>송수호의 사이트입니다.</ScriptTypo>
      </MainBlock>
    </Fragment>
  );
};

export default Main;