import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  max-width: 1226px;
  background: #38556c;
`;

export const ImgContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 599px) {
    flex-direction: column;
  }

  > div {
    max-width: 600px;
    min-width: 250px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    height: max-content;
    justify-content: center;

    > div {
      display: inline-block;
      margin-right: 6px;
      position: relative;

      > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        color: cyan;
      }
    }
  }

  > div:nth-child(2) {
    min-width: 125px;
  }
`;

export const Heart = styled.div`
  position: absolute;
  z-index: 1;
  top: 5%;
  right: 5%;
  cursor: pointer;
`;
