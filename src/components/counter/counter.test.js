import { expect, test } from 'vitest'
import useCounter from './useCounter'
const { count, increment, decrement } = useCounter()

test('counter', () => {
  expect(count.value).toBe(0)

  increment()

  expect(count.value).toBe(1)

  decrement()

  expect(count.value).toBe(0)
})
