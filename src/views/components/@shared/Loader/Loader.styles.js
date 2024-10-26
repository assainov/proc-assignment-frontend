import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  padding: 0;
  margin: 0;
  border: 2px solid #fff;
  border-top: 2px solid black;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: ${spinAnimation} 2s linear infinite;
`;