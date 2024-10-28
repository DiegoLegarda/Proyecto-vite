import { expect, test } from 'vitest'
import  {suma}  from '../componentes/suma.jsx'

test('Suma de 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3)
})