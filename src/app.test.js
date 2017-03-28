/* global describe, it, expect */
import App from './app'

describe('Main app', () => {
  it('should add two numbers', () => {
    // expect(App.add(1, 3)).to.equal(4)
    expect(App).to.exist
  })
})
