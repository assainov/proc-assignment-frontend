import React from 'react';
import useAutoComplete from 'views/hooks/use-autocomplete';
import { Spinner } from 'views/components/@shared/Loader/Loader.styles';
import { Container, DEFAULT_SEARCH_WIDTH, Input, InputWrapper, ListContainer, ListItem, SearchIcon, SpinnerWrapper } from './AutoComplete.styles';

const getSuggestions = async (search) => {
  try {
    const res = await fetch(`https://swapi.dev/api/people/?search=${search}`);
    const data = await res.json();
    return data.results.map(person => ({ value: person.name, label: person.name }));
  } catch (e) {
    console.error(e);
    return [];
  }
};

const AutoComplete = ({ width = DEFAULT_SEARCH_WIDTH }) => {
  // const [error, setError] = React.useState(null);

  const { bindInput, bindOptions,  bindOption, isLoading, suggestions, selectedIndex} = useAutoComplete({
    onChange: value => console.log(value),
    source: (search) => {
      try {
        return getSuggestions(search);
      } catch (e) {
        // setError(e.message);
        console.error(e.message);
        return [];
      }
    },
    startFrom: 3
  });

  const renderSpinner = () => (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );

  return (
    <Container $width={width}>
      <InputWrapper>
        {isLoading ? renderSpinner() : <SearchIcon size={25} />}
        <Input
          $isSuggesting={suggestions.length > 0}
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