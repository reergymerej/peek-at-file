import * as mod from './helpers'

describe('isIndex', () => {
  it.each`
    url | expected
    ${'/'} | ${true}
    ${'/index.html'} | ${true}
    ${'/index.htm'} | ${true}
    ${'/favicon.ico'} | ${false}
    ${'/index/foo.html'} | ${false}
    ${'/bar/index.html'} | ${false}
  `('$expected $url', ({ url, expected }) => {
  expect(mod.isIndex(url)).toBe(expected)
})
})

describe('isFavIcon', () => {
  it.each`
      url | expected
      ${'/favicon.html'} | ${false}
      ${'/favicon.ico'} | ${true}
    `('$expected $url', ({ url, expected }) => {
  expect(mod.isFavIcon(url)).toBe(expected)
})
})
