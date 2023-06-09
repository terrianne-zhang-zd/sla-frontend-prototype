import React, { useRef, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Item, Menu, Label, Field, Dropdown, Autocomplete } from '@zendeskgarden/react-dropdowns';
import { Row, Col } from '@zendeskgarden/react-grid';

const options = [
  'Calendar hours'
];

const Example = () => {
  const [selectedItem, setSelectedItem] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');
  const [matchingOptions, setMatchingOptions] = useState(options);

  /**
   * Debounce filtering
   */
  const filterMatchingOptionsRef = useRef(
    debounce((value: string) => {
      const matchedOptions = options.filter(
        option => option.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1
      );

      setMatchingOptions(matchedOptions);
    }, 300)
  );

  useEffect(() => {
    filterMatchingOptionsRef.current(inputValue);
  }, [inputValue]);

  return (
    <Dropdown
      inputValue={inputValue}
      selectedItem={selectedItem}
      onSelect={item => setSelectedItem(item)}
      onInputValueChange={value => setInputValue(value)}
      downshiftProps={{ defaultHighlightedIndex: 0 }}
    >
      <Field>
        <Label isRegular>Hours of operation</Label>
        <Autocomplete>{selectedItem}</Autocomplete>
       </Field>
      <Menu>
        {matchingOptions.length ? (
          matchingOptions.map(option => (
            <Item key={option} value={option}>
              <span>{option}</span>
            </Item>
          ))
        ) : (
          <Item disabled>No matches found</Item>
        )}
      </Menu>
    </Dropdown>
  );
};

export default Example;