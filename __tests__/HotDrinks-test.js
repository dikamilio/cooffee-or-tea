/*
 * Copyright (c) 2020. Kamil Łukowski
 */

import 'react-native';
import React from 'react';
import HotDrinks from '../src/shared/components/hot-drinks/HotDrinks';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<HotDrinks />);
});
