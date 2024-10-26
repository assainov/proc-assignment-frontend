import React from 'react';
import styled from 'styled-components';
import { device } from 'views/styles/responsive';
import AutoComplete from '../AutoComplete/AutoComplete';

const HeroScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220px;

  @media ${device.tablet} {
    padding-top: 5rem;
  }
`;

const TextWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 3rem;
  color: rgb(107, 101, 195);
  margin: 10px 0;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

const AutoCompleteContainer = styled.div`
  width: 746px;

  @media ${device.tablet} {
    width: 400px;
  }

  @media ${device.mobile} {
    width: 300px;
  }
`;

const InstructionsText = styled.p`
  margin: 0;
  color: rgb(95, 99, 104);
`;

const HeroScreen = () => (
  <HeroScreenContainer>
    <TextWrapper>
      <Logo>SWAPI.People</Logo>
      <InstructionsText>Start typing a Star Wars character name. E.g: Luke</InstructionsText>
    </TextWrapper>
    <AutoCompleteContainer>
      <AutoComplete width="100%" />
    </AutoCompleteContainer>
  </HeroScreenContainer>
);

export default HeroScreen;