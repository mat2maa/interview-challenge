import React from 'react';

import expect from 'expect';

import App from './App';
import MenuBuilder from './components/MenuBuilder';
import MenuItem from './components/MenuItem';
import MenuSummary from './components/MenuSummary';

import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders', () => {
  const div = shallow(<App/>);
  expect(div).toMatchSnapshot();
});

it('checks the number of items in the picker', () => {
  const menuBuilder = mount(<MenuBuilder/>);
  const items = menuBuilder.find('ul.item-picker').find(MenuItem);
  expect(items.length).toEqual(20);
});

it('checks the initial menu length', () => {
  const menuBuilder = mount(<MenuBuilder/>);
  const items = menuBuilder.find('ul.menu-preview').find(MenuItem);
  expect(items.length).toEqual(0);

  const menuSummary = mount(<MenuSummary/>);
  const count = menuSummary.find('.menu-summary-left').find('span');
  expect(count.text()).toEqual('0 items');

  const dietaries = menuSummary.find('.menu-summary-right').first();
  expect(dietaries.text()).toEqual('');
});

it(
  'checks that that the menu length increases when an item is added and decreases when it is removed',
  () => {
    const menuBuilder = mount(<MenuBuilder/>);
    const item = menuBuilder.find('ul.item-picker').find(MenuItem).first();
    item.simulate('click');

    let menuItems = menuBuilder.find('ul.menu-preview').find(MenuItem);
    expect(menuItems.length).toEqual(1);

    const menuSummary = mount(<MenuSummary/>);
    let count = menuSummary.find('.menu-summary-left').find('span');
    expect(count.text()).toEqual('1 item');

    let dietaries = menuSummary.find('.menu-summary-right').first();
    expect(dietaries.text()).toEqual('1x v1x ve1x df1x gf1x n!');

    const menuItemCross = menuItems.first().find('button.remove-item');
    menuItemCross.simulate('click');

    menuItems = menuBuilder.find('ul.menu-preview').find(MenuItem);
    expect(menuItems.length).toEqual(0);

    count = menuSummary.find('.menu-summary-left').find('span');
    expect(count.text()).toEqual('0 items');

    dietaries = menuSummary.find('.menu-summary-right').first();
    expect(dietaries.text()).toEqual('');
  });
