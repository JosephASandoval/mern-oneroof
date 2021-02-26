import React from 'react';

class ChoreBox extends React.Component {
  render() {
    return (
        <div>
            <h3>{this.props.body}</h3>
        </div>
    );
  }
}

export default ChoreBox;