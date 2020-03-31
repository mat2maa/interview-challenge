import React from 'react';

import MenuSummary from './components/MenuSummary';
import MenuBuilder from './components/MenuBuilder';

import './App.css';

export default () => (
  <div className="wrapper">
    <MenuSummary/>
    <MenuBuilder/>
  </div>
);
