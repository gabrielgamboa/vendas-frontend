import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const LogoImage = styled.img``;

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px;
  background: #d9d9d9;
  width: 100%;
  width: 100%;
  max-width: 646px;
  height: 100vh;
`;

export const LimitedContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 498px;
  width: 100%;
`;
