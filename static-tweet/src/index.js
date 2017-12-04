import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Time = () => (
  <span className="time">3h ago</span>
);

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

function Message() {
  return (
    <div className="message">
      This is less than 140 characters.
    </div>
  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">@yourhandle</span>
    </span>
  );
}


function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/439dbfe15ce6232d339eaeb08357c3d6"
      className="avatar"
      alt="avatar" />
  );
}

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <NameWithHandle /><Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Tweet />,
  document.querySelector('#root')
);
