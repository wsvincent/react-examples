import React from 'react';
import ReactDOM from 'react-dom';

function BreakMe() {
  return (
    <div>
      <div>['a', 'b']</div>
      <div>'"this is quotes"'</div>
    </div>
  )
}

function Greeting() {
  var username = "root";
  // var username = undefined;
  // var username = null;
  // var username = false;

  return (
    <span>{username ? 'Hello ' + username : 'Not logged in'}</span>
  );
}


function Duplicate() {
  return (
    React.createElement(
      'div',
      {},
      React.createElement('div', {}, 'The Title'),
      React.createElement('div', {}, 'The Author'),
      React.createElement('ul', {},
        React.createElement('li', {}, '5 starts'),
        React.createElement('li', {}, '12-345678-910')
      ),
    )
  )
}

function MyThing() {
  return (
    <div className='book'>
      <div className='title'>
        The Title
      </div>
      <div className='author'>
        The Author
      </div>
      <ul className='stats'>
        <li className='rating'>
          5 stars
        </li>
        <li className='isbn'>
          12-345678-910
        </li>
      </ul>
      <Duplicate />
      <Greeting />
      <BreakMe />
    </div>
  )
}

ReactDOM.render(
  <MyThing />,
  document.getElementById('root')
);
