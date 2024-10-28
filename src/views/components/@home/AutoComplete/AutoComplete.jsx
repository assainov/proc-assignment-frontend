import React from 'react';
import useAutoComplete from 'views/hooks/use-autocomplete';
import { Spinner } from 'views/components/@shared/Loader/Loader.styles';
import { ClearIcon, Container, DEFAULT_SEARCH_WIDTH, Input, InputWrapper, ListContainer, ListItem, SearchIcon, SpinnerWrapper } from './AutoComplete.styles';
import { useResultStore } from '../../../../state/useResultStore';
import { getPeople } from '../../../../services/queries/getPeople';
import { usePeopleStore } from '../../../../state/usePeopleStore';

const AutoComplete = ({ width = DEFAULT_SEARCH_WIDTH }) => {
  const people = usePeopleStore(state => state.people);
  const setPeople = usePeopleStore(state => state.setPeople);
  const setResult = useResultStore(state => state.setResult);
  const result = useResultStore(state => state.result);

  const { bindInput, bindOptions, bindOption, isLoading, suggestions, selectedIndex } = useAutoComplete({
    onChange: (option) => setResult(people.find(s => s.name === option.value)),
    source: async (search) => {
      const { error, data } = await getPeople(search);
      setPeople(data, error);
      return error ? [] : data.map(person => ({ value: person.name, label: person.name }));
    },
    startFrom: 3
  });

  const renderSpinner = () => (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );

  const renderSuggestions = () => (
    suggestions.map((suggestion, index) => (
      <ListItem
        $isSelected={selectedIndex === index}
        data-test={`${suggestion.label}`}
        key={index}
        {...bindOption}
      >
        {suggestion.label}
      </ListItem>
    ))
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
        {result ?
          <ClearIcon
            onClick={() => { setResult(null); bindInput.$onEmpty(); }}
            size={20}
          />
          : null}
      </InputWrapper>
      <ListContainer {...bindOptions}>
        {renderSuggestions()}
      </ListContainer>
    </Container>
  );
};

export default AutoComplete;
