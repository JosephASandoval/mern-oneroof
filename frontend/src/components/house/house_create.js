import React from 'react';

class HouseCreate extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          name: "",
          newHouse: ""
      }

      this.handleSubmit = this.handleSubmit.bind(this);
  } 

  componentWillReceiveProps(nextProps) {
      debugger;
      this.setState({newHouse: nextProps.newHouse.name});
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();
    let house = {
      name: this.state.name
    };
    debugger;
    this.props.createHouse(house); 
    this.setState({name: ''})
  }

  update() {
    return e => this.setState({
      name: e.currentTarget.value
    });
  }

  render() {
    return (
        <>
        <div>Create Your House!</div>
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text"
                        value={this.state.name}
                        onChange={this.update()}
                        placeholder="Your house name"
                    />
                    <input type="submit" value="Create" />
                </div>
            </form>
            <br />
        </div>
        </>
    )
  }
}

export default HouseCreate;
