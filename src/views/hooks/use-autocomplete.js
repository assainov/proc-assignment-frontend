/**
 * Credits: Paul Allies
 * Link: https://paulallies.medium.com/how-to-build-a-react-autocomplete-component-31085bf0c82b
 * Documentation by Ilyas Assainov.
 */

import { useRef, useState } from 'react';

const KEY_CODES = {
  DOWN: 40,
  UP: 38,
  PAGE_DOWN: 34,
  ESCAPE: 27,
  PAGE_UP: 33,
  ENTER: 13,
};

/**
 * Callback for providing dropdown options.
 *
 * @callback Source
 * @param {string} searchTerm - The current value being searched.
 */

/**
 * Callback when user selects an option.
 *
 * @callback OnChange
 * @param {any} value - The selected value.
 */

/**
 * Custom hook for handling autocomplete functionality.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.delay - Delay in milliseconds between last keyboard input and fetching options.
 * @param {number} props.startFrom - Start suggesting after a certain number of characters are inputted.
 * @param {Source} props.source - Callback for providing dropdown options.
 * @param {OnChange} props.onChange - Callback when user selects an option.
 * @returns {Object} returns - The autocomplete bindings and state.
 * @returns {Object} returns.bindOption - Bindings for the option elements. Use as a spread operator to <li {...bindOption} /> component.
 * @returns {function} returns.bindOption.onClick - Click handler for option elements.
 * @returns {Object} returns.bindInput - Bindings for the input element.  Use as a spread operator to <input {...bindInput} /> component.
 * @returns {string} returns.bindInput.value - The current value of the input.
 * @returns {function} returns.bindInput.onChange - Change handler for the input element.
 * @returns {function} returns.bindInput.onKeyDown - Key down handler for the input element.
 * @returns {Object} returns.bindOptions - Bindings for the options container. Use as a spread operator to <ul {...bindOptions} /> component.
 * @returns {Object} returns.bindOptions.ref - Ref for the options container.
 * @returns {boolean} returns.isLoading - Indicates if the component is busy fetching suggestions.
 * @returns {Array} returns.suggestions - The list of suggestions.
 * @returns {number} returns.selectedIndex - The index of the currently selected suggestion.
 */
export default function useAutoComplete({ delay = 500, startFrom = 1, source, onChange }) {

  const [myTimeout, setMyTimeOut] = useState(setTimeout(() => { }, 0));
  const listRef = useRef();
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [textValue, setTextValue] = useState('');

  function delayInvoke(cb) {
    if (myTimeout) {
      clearTimeout(myTimeout);
    }
    setMyTimeOut(setTimeout(cb, delay));
  }

  function selectOption(index) {
    if (index > -1) {
      onChange(suggestions[index]);
      setTextValue(suggestions[index].label);
    }
    clearSuggestions();
  }

  async function getSuggestions(searchTerm) {
    if (searchTerm && source) {
      const options = await source(searchTerm);
      setSuggestions(options);
    }
  }

  function clearSuggestions() {
    setSuggestions([]);
    setSelectedIndex(-1);
  }

  function onTextChange(searchTerm) {
    setTextValue(searchTerm);

    /* Start suggesting after a certain number of characters are inputted */
    if (searchTerm.length < startFrom) {
      clearSuggestions();
      return;
    }

    setLoading(true);
    clearSuggestions();
    delayInvoke(() => {
      getSuggestions(searchTerm);
      setLoading(false);
    });
  }

  const optionHeight = listRef?.current?.children[0]?.clientHeight;

  function scrollUp() {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
    listRef.current.scrollTop -= optionHeight;
  }

  function scrollDown() {
    if (selectedIndex < suggestions.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
    listRef.current.scrollTop = selectedIndex * optionHeight;
  }

  function pageDown() {
    setSelectedIndex(suggestions.length - 1);
    listRef.current.scrollTop = suggestions.length * optionHeight;
  }

  function pageUp() {
    setSelectedIndex(0);
    listRef.current.scrollTop = 0;
  }

  function onKeyDown(e) {
    const keyOperation = {
      [KEY_CODES.DOWN]: scrollDown,
      [KEY_CODES.UP]: scrollUp,
      [KEY_CODES.ENTER]: () => selectOption(selectedIndex),
      [KEY_CODES.ESCAPE]: clearSuggestions,
      [KEY_CODES.PAGE_DOWN]: pageDown,
      [KEY_CODES.PAGE_UP]: pageUp,
    };
    if (keyOperation[e.keyCode]) {
      keyOperation[e.keyCode]();
    } else {
      setSelectedIndex(-1);
    }
  }

  return {
    bindOption: {
      onClick: e => {
        let nodes = Array.from(listRef.current.children);
        selectOption(nodes.indexOf(e.target.closest('li')));
      }
    },
    bindInput: {
      value: textValue,
      onChange: e => onTextChange(e.target.value),
      onEmpty: () => onTextChange(''),
      onKeyDown
    },
    bindOptions: {
      ref: listRef
    },
    isLoading,
    suggestions,
    selectedIndex,
  };
}