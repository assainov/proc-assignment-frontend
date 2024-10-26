import styled from 'styled-components';
import { device } from 'views/styles/responsive';

export const HeroScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;

  @media ${device.tablet} {
    padding-top: 5rem;
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

export const Logo = styled.h1`
  font-size: ${props => props.theme.fontSizes.desktop.h1};
  color: ${props => props.theme.colors.primary};
  margin: 10px 0;

  @media ${device.tablet} {
    font-size: ${props => props.theme.fontSizes.tablet.h1};
  }
`;

export const AutoCompleteContainer = styled.div`
  width: 746px;

  @media ${device.tablet} {
    width: 400px;
  }

  @media ${device.mobile} {
    width: 300px;
  }
`;

export const InstructionsText = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.darkGray};
`;