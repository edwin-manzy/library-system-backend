import { removeCircularDependency } from 'src/utils/helpers'

describe ('Utils', () => {
  describe('#removeCircularDependency', () => {
    it ('should remove circular dependency', () => {
      const a = {
        value1: 1,
        a: null,
        b: null,
      };

      // @ts-ignore
      a.a = a;

      const b = {
        value2: 2,
        b: null,
        a: null,
      }

      // @ts-ignore
      b['a'] = a;
      // @ts-ignore
      a['b'] = b;
      // @ts-ignore
      b['b'] = b;
      const fixed = removeCircularDependency(a);
      expect(fixed).toMatchObject({ value1: 1, b: { value2: 2 }})
    })
  })
})