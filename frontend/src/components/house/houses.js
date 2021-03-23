import React from 'react';
import { Link, withRouter } from 'react-router-dom';;

class Houses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: []
    }
  }

  componentWillMount() {
    this.props.fetchHouses();
  }

  componentWillReceiveProps(newState) {
    this.setState({ houses: newState.houses });
  }

  render() {
    if (this.state.houses.length === 0) {
      return (
        <>
        <div>There are no houses</div>
        <div>
            <Link to='/new_house'>Create a new House!</Link>
        </div>
        </>)
    } else {
      return (
        <>
        <div>
          <h2>My Houses</h2>
          {this.state.houses.map(house => {
            if (house.user === this.props.currentUser.id) {
              return <li>{house.name}</li>
            }
          }
              
              
          )}
        </div>
        <div>
            <Link to='/new_house'>Create a new House!</Link>
        </div>
        </>
      );
    }
  }
}

export default withRouter(Houses);
