import React from 'react';
import useGlobalHook from './useGlobalHook';

import * as actions from '../actions';

const initialState = {
  menu: [],
  menuCount: 0,
  dietaries: {},
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
