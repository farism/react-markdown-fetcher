import React from 'react'
import renderer from 'react-test-renderer'

import MarkdownFetcher from '../MarkdownFetcher'

test('Snapshot', () => {
  const component = renderer.create(<MarkdownFetcher />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
