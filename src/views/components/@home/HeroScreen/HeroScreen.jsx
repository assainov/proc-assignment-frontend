import React from 'react';
import AutoComplete from '../AutoComplete/AutoComplete';
import { AutoCompleteContainer, HeroScreenContainer, InstructionsText, Logo, TextWrapper } from './HeroScreen.styles';

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