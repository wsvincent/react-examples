import React from 'react';
import ReactDOM from 'react-dom';
import App from './Counter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Counter />, div);
});
