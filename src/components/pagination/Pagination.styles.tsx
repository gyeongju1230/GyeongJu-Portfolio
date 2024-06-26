import styled, { css, keyframes } from 'styled-components';

const smallViewport = '62rem';

const grow = keyframes`
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(1.25);
  }
`;

const shrink = keyframes`
  from {
    transform: scaleX(1.25);
  }
  to {
    transform: scaleX(1);
  }
`;

export const PaginationContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 172px;
  right: 35px;
  gap: 12px;
  opacity: 1;
  z-index: 1;
  transition-property: opacity;
  transition-duration: 200ms;
  transition-timing-function: ease;

  @media (max-width: ${smallViewport}) {
    top: 100px;
    right: 10px;
    gap: 6px;
  }
`;

export const PageItem = styled.div<{ isActive: boolean }>`
  width: ${props => (props.isActive ? '20px' : '16px')};
  height: 2px;
  margin: 5px 0;
  border-radius: 10px;
  background-color: ${props =>
    props.isActive ? '#d8b28c' : 'rgb(227, 226, 224)'};
  animation: ${props =>
    props.isActive
      ? css`
          ${grow} 0.3s ease forwards
        `
      : css`
          ${shrink} 0.3s ease forwards
        `};

  @media (max-width: ${smallViewport}) {
    width: ${props => (props.isActive ? '16px' : '12px')};
    height: 2px;
    margin: 2.5px 0;
    border: 5px;
    animation: ${props =>
      props.isActive
        ? css`
            ${grow} 0.3s ease forwards
          `
        : css`
            ${shrink} 0.3s ease forwards
          `};
  }
`;
