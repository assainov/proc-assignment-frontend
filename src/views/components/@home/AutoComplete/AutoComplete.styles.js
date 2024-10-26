import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

export const DEFAULT_SEARCH_WIDTH = '40rem';

export const Container = styled.div`
  position: relative;
  /* background-color: #e9e9e9; */

  ${props => props.$width && `
    width: ${props.$width};
  `}
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid transparent;
  border-radius: 10px;

  /*remove bottom radius when options are shown*/
  ${props => props.$isSuggesting && `
    border-radius: 10px 10px 0 0;
  `}

  padding: 1rem 2.5rem 1rem 3rem;
  font-size: 16px;

  width: 100%;

  &:focus {
    outline: none;
    background-color: #fff;
    transition: background-color 0.3s;
  }

  font-size: 1.2rem;
  box-shadow: 0 1px 4px rgba(32, 33, 36, 0.28);
  color: rgb(95, 99, 104);

  &::placeholder {
    color: rgb(95, 99, 104);
  }
`;

export const SearchButton = styled.button`
  background-color: DodgerBlue;
  color: #fff;
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
  box-shadow: 0 2px 4px rgba(32, 33, 36, 0.28);
  border-radius: 0 0 10px 10px;
`;

export const ListItem = styled.li`
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;
  color: rgb(95, 99, 104);

  &:hover {
    background-color: #e9e9e9;
  }

  /*when navigating through the items using the arrow keys:*/
  ${props => props.$isSelected && `
    background-color: #e9e9e9;
  `}
`;

export const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(0,-50%);

  color: rgb(95, 99, 104);
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(0,-50%);
`;