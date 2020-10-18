import { generateRandom } from '../scripts'

describe('RandomBytes Function Works', () => {
  test('randomBytes function returns a function', () => {
    const result = generateRandom()
    expect(result).toMatch(/^[a-f0-9]+$/)
  })
})