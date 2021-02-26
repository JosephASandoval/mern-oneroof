import React from 'react';
import './post_box.css';

class PostBox extends React.Component {
  render() {
    return (
        <div className='Postbox-Container'>
            <p>{this.props.text}</p>
        </div>
    );
  }
}

export default PostBox;
