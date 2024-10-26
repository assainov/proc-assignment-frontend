import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { default as useAutoComplete } from './use-autocomplete';

describe('useAutoComplete() hook', () => {
  it('returns an object with the expected properties', () => {
    const { result } = renderHook(() => useAutoComplete({
      delay: 500,
      startFrom: 1,
      source: () => {},
      onChange: () => {}
    }));

    expect(result.current).toHaveProperty('bindOption');
    expect(result.current).toHaveProperty('bindInput');
    expect(result.current).toHaveProperty('bindOptions');
    expect(result.current).toHaveProperty('isLoading');
    expect(result.current).toHaveProperty('suggestions');
    expect(result.current).toHaveProperty('selectedIndex');
  });

  it('returns correct suggestions when supplied via source function and mocked search', async () => {
    const source = () => [{ label: 'apple', value: 'apple' }];
    const { result } = renderHook(() => useAutoComplete({
      delay: 50,
      startFrom: 1,
      source,
      onChange: () => {}
    }));

    await act(async () => {
      result.current.bindInput.onChange({ target: { value: 'app' } });

      // wait for the delay timer inside of the hook
      await new Promise((r) => setTimeout(r, 100));
    });

    expect(result.current.suggestions).toEqual([{ label: 'apple', value: 'apple' }]);
  });
});