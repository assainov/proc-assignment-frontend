import React from 'react';
import styled from 'styled-components';
import { CiLock } from 'react-icons/ci';

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.desktop.h1};
  color: ${({ theme }) => theme.colors.primary};
`;

const SignupWall = () => (
  <LockContainer>
    <CiLock size={100} />
    <Heading>Sign up to continue</Heading>
  </LockContainer>
);

export default SignupWall;