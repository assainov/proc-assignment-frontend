import { stripUnderscore } from './utils';

describe('ResultSection', () => {
  describe('utils', () => {
    describe('stripUnderscore()', () => {
      it('removes single underscore', () => {
        expect(stripUnderscore('my_snake_case_string')).toBe('my snake case string');
      });

      it('removes multiple underscores', () => {
        expect(stripUnderscore('my__snake__case__string')).toBe('my  snake  case  string');
      });
    });
  });
});
