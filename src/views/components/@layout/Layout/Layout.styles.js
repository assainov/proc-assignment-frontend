import styled from 'styled-components';
import { device } from 'views/styles/responsive';

export const Container = styled.main`
  padding: 1rem 4rem;

  @media ${device.tablet} {
    padding: 1rem 2rem;
  }
`;