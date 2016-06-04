import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Transporting', '28 D Later'];

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('app')
);
