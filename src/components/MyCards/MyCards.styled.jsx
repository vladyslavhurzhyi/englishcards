import styled from '@emotion/styled';

export const CardWrap = styled.div`
  width: 300px;
  height: 400px;
  transition: all 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  background: ${props => (props.isRotate ? 'blue' : 'red')};
  .face {
    opacity: ${props => (props.isRotate ? '1 ' : '0')};
  }

  .back {
    opacity: ${props => (props.isRotate ? '0' : '1')};
  }
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: white;
  transition: all 0.3s;
`;

export const Box = styled.div`
  width: 300px;
  height: 250px;
  border: 1px solid #ccc;
  margin: 40px 0;
  perspective: 600px;
  overflow: hidden;
`;
