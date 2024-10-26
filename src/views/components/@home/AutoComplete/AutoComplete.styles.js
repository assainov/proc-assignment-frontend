import { FiSearch } from 'react-icons/fi';
import { RiCloseLargeFill } from 'react-icons/ri';
import styled, { css } from 'styled-components';

export const DEFAULT_SEARCH_WIDTH = '40rem';

export const Container = styled.div`
  position: relative;

  ${props => props.$width && `
    width: ${props.$width};
  `}
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid ${pr => pr.theme.colors.transparent};
  border-radius: ${pr => pr.theme.borderRadiuses.default};

  /*remove bottom radius when options are shown*/
  ${props => props.$isSuggesting && css`
    border-radius: ${pr => pr.theme.borderRadiuses.default} ${pr => pr.theme.borderRadiuses.default} 0 0;
  `}

  padding: 1rem 2.5rem 1rem 3rem;

  width: 100%;

  &:focus {
    outline: none;
    background-color: ${pr => pr.theme.colors.white};
    transition: background-color 0.3s;
  }

  font-size: ${pr => pr.theme.fontSizes.desktop.input};
  box-shadow: ${pr => pr.theme.boxShadows.input};
  color: ${pr => pr.theme.colors.darkGray};

  &::placeholder {
    color: ${pr => pr.theme.colors.darkGray};
    font-size: ${pr => pr.theme.fontSizes.desktop.input};
  }
`;

export const ListContainer = styled.ul`
  position: absolute;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;

  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 260px;
  scroll-behavior: smooth;

  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: ${pr => pr.theme.boxShadows.input};
  border-radius: 0 0 ${pr => pr.theme.borderRadiuses.default} ${pr => pr.theme.borderRadiuses.default};
`;

export const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  background-color: ${pr => pr.theme.backgrounds.white};;
  color: ${pr => pr.theme.colors.darkGray};

  &:hover {
    background-color: ${pr => pr.theme.backgrounds.lightGray};
  }

  /*when navigating through the items using the arrow keys:*/
  ${props => props.$isSelected && css`
    background-color: ${pr => pr.theme.backgrounds.lightGray};
  `}
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(0,-50%);

  color: ${pr => pr.theme.colors.darkGray};
`;

export const ClearIcon = styled(RiCloseLargeFill)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0,-50%);
  
  cursor: pointer;

  color: ${pr => pr.theme.colors.darkGray};
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(0,-50%);
`;