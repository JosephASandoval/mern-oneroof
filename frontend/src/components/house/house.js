import React from 'react';
import { Link, withRouter } from 'react-router-dom';;

class House extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: []
    }
  }

  componentWillMount() {
    this.props.fetchUserHouses();
  }

  componentWillReceiveProps(newState) {
    this.setState({ houses: newState.houses });
  }

  render() {
    if (this.state.houses.length === 0) {
      return (<div>There are no houses</div>)
    } else {
      return (
        <>
        <div>
          <h2>All Houses</h2>
          {this.state.houses.map(house => (
              <li>{house.name}</li>
          ))}
        </div>
        <div>
            <Link to='/new_house'>Create a new House!</Link>
        </div>
        </>
      );
    }
  }
}

export default withRouter(House);
