import React from "react";
import Card from "./Card";
import WithRouting from "./WithRouting";
import {Link} from "react-router-dom"

const API_KEY = "dJnLyA8ba2PJCj4BubQAl4Gp8fJ7m0uGYBOoyw6M";

class AsteroidById extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleData: {},
    };

    this.handlePrev = this.handlePrev.bind(this)
  }
  componentDidMount() {
    const { id } = this.props.params;
    console.log(id);
    this.getData(id);
  }

  handlePrev(){
    this.props.navigate(-1)
  }

  getData = (id) => {
    fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => this.setState(json))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <div>
          <Card {...this.state.singleData} />
        </div>
        <div>
          <button onClick={this.handlePrev}>Go Back</button>
        </div>
      </div>
    );
  }
}

export default WithRouting(AsteroidById);
