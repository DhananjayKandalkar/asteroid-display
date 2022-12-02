import React from "react";
import WithRouting from "./WithRouting"


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inpValue: "",
    };
    this.handleInpChange = this.handleInpChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRandomClick = this.handleRandomClick.bind(this);
  }
  handleInpChange(e) {
    e.preventDefault();
    this.setState({ inpValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    confirm("are you sure");
    this.props.navigate(`/AsteroidById/:${this.state.inpValue}`)
  }

  handleRandomClick() {
    this.props.navigate(`/random`);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Class Base platform</h1>
          <h2>Find Asteroids by ID</h2>
          <form action="" onSubmit={this.handleSubmit} className="form">
            <input
              onChange={this.handleInpChange}
              type="text"
              placeholder="Find by id. for-ex. 3542519"
              value={this.state.inpValue}
            />
            <input type="submit" value="Submit" className="submit"/>
          </form>
          <div>
            <button className="" onClick={this.handleRandomClick}>
              Random Asteroids
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default WithRouting(Form);