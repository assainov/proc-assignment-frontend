import React from 'react';
import useAutoComplete from 'views/hooks/use-autocomplete';
import { Spinner } from 'views/components/@shared/Loader/Loader.styles';
import { Container, DEFAULT_SEARCH_WIDTH, Input, InputWrapper, ListContainer, ListItem, SearchIcon, SpinnerWrapper } from './AutoComplete.styles';

const Options = [
  { value: '1', label: 'John' },
  { value: '2', label: 'Jack' },
  { value: '3', label: 'Jane' },
  { value: '4', label: 'Mike' },
];

const AutoComplete = ({ width = DEFAULT_SEARCH_WIDTH }) => {
  const { bindInput, bindOptions,  bindOption, isBusy, suggestions, selectedIndex} = useAutoComplete({
    onChange: value => console.log(value),
    source: (search) => Options.filter(option => new RegExp(`^${search}`, 'i').test(option.label))
  });

  const renderSpinner = () => (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );

  return (
    <Container $width={width}>
      <InputWrapper>
        {isBusy ? renderSpinner() : <SearchIcon size={25} />}
        <Input
          placeholder="Search a name"
          {...bindInput}
        />
      </InputWrapper>
      <ListContainer
        {...bindOptions}
      >
        {
          suggestions.map((_, index) => (
            <ListItem
              $isSelected={selectedIndex === index}
              key={index}
              {...bindOption}
            >
              {suggestions[index].label}
            </ListItem>
          ))
        }
      </ListContainer>
    </Container>
  );
};

export default AutoComplete;