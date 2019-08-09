/**
 * @format
 */

import 'react-native';
import React from 'react';
import uuid from 'react-native-uuid';
import KittenViewPage from '../app/src/containers/KittenView/views/KittenViewPage/KittenViewPage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('KittenViewPage renders correctly', () => {
  const mockItem = {
    imageUrl: `http://placekitten.com/200/300?image=1`,
    label: 'Bateman',
    id: uuid.v4()
  };

  const navigation = { navigate: jest.fn() };

  renderer.create(<KittenViewPage kitten={mockItem} navigation={navigation}/>);
});

it('KittenViewPage match snapshot', () => {
  const mockItem = {
    imageUrl: `http://placekitten.com/200/300?image=1`,
    label: 'Bateman',
    id: uuid.v4()
  };

  const navigation = { navigate: jest.fn() };

  const component = renderer.create(<KittenViewPage kitten={mockItem} navigation={navigation}/>).toJSON();
  expect(component).toMatchSnapshot();
});
