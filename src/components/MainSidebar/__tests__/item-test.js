jest.unmock('./../Item')

import React from 'react'
import {shallow} from 'enzyme'

import Item from './../Item'

describe('MainSidebar.Menu.Item', () => {
  it('should not have classname if isTreeview prop is not provided', () => {
    const wrapper = shallow(<Item />)

    expect(
      wrapper.prop('className')
    ).toEqual('')
  })

  it('should have classname if isTreeview prop is provided', () => {
    const wrapper = shallow(<Item isTreeview />)

    expect(
      wrapper.hasClass('treeview')
    ).toBeTruthy()
  })

  it('should have classname active if prop provided', () => {
    const wrapper = shallow(<Item active />)

    expect(
      wrapper.hasClass('active')
    ).toBeTruthy()
  })

  it('should not have classname active if prop not provided', () => {
    const wrapper = shallow(<Item />)

    expect(
      wrapper.hasClass('active')
    ).toBeFalsy()
  })

  it('should be header if prop provided', () => {
    const wrapper = shallow(<Item header title='Main Section' />)

    expect(
      wrapper.hasClass('header')
    ).toBeTruthy()

    expect(
      wrapper.text()
    ).toContain('Main Section')
  })

  it('should not be header if prop not provided', () => {
    const wrapper = shallow(<Item />)

    expect(
      wrapper.hasClass('header')
    ).toBeFalsy()
  })

  it('should have label without span when isTreeview not provided', () => {
    const wrapper = shallow(<Item title='Main Section' />)

    expect(
      wrapper.contains(<span>Main Section</span>)
    ).toBeFalsy()
  })

  it('should have label with span when isTreeview provided', () => {
    const wrapper = shallow(<Item isTreeview title='Main Section' />)

    expect(
      wrapper.contains(<span>Main Section</span>)
    ).toBeTruthy()
  })

  it('should not have arrow when isTreeview not provided', () => {
    const wrapper = shallow(<Item />)

    expect(
      wrapper.find('span.pull-right-container').length
    ).toEqual(0)

    expect(
      wrapper.find('i.fa.fa-angle-left.pull-right').length
    ).toEqual(0)
  })

  it('should have arrow when isTreeview is provided', () => {
    const wrapper = shallow(<Item isTreeview />)

    expect(
      wrapper.find('span.pull-right-container').length
    ).toEqual(1)

    expect(
      wrapper.find('i.fa.fa-angle-left.pull-right').length
    ).toEqual(1)
  })

  it('should pass down children', () => {
    const wrapper = shallow(
      <Item>
        <li />
      </Item>
    )

    expect(
      wrapper.contains(<li />)
    ).toBeTruthy()
  })

  it('should pass onClick and call it when provided', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Item onClick={spy} />)

    wrapper.find('MyLink').simulate('click')

    expect(
      spy
    ).toHaveBeenCalled()
  })

  it('should have link with external link', () => {
    const wrapper = shallow(<Item href='http://example.com' />)

    expect(
      wrapper.find('MyLink').prop('href')
    ).toEqual('http://example.com')
  })

  it('should not have label if prop not provided', () => {
    const wrapper = shallow(<Item isTreeview />)

    expect(
      wrapper.find('span.label').length
    ).toEqual(0)
  })

  it('should have label if prop provided', () => {
    const wrapper = shallow(<Item label='new' />)

    const label = wrapper.find('span.label')

    expect(
      label.length
    ).toEqual(1)

    expect(
      label.contains('new')
    ).toBeTruthy()
  })

  it('should not give labelClassName to the label if prop not provided', () => {
    const wrapper = shallow(<Item labelClassName='label-primary' />)

    expect(
      wrapper.find('label-primary').length
    ).toEqual(0)
  })

  it('should give labelClassName to the label if provided', () => {
    const wrapper = shallow(<Item label='new' labelClassName='label-primary' />)

    expect(
      wrapper.find('span.label').hasClass('label-primary')
    ).toBeTruthy()
  })
})
