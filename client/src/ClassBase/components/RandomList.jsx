import React from "react";
import Card from "./Card";
import WithRouting from "./WithRouting";

const API_KEY = "dJnLyA8ba2PJCj4BubQAl4Gp8fJ7m0uGYBOoyw6M";
const API_LINK = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`;

class RandomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomData: [],
      isLoading: false
    };
    this.handlePrev = this.handlePrev.bind(this)
  }

  componentDidMount() {
    fetch(API_LINK)
      .then((response) => response.json())
      .then((json) => this.setState({ randomData: json, isLoading: true }))
      .catch((error) => console.log(error));
  }

  handlePrev(){
    this.props.navigate(-1)
  }

  render() {
    const { isLoading, randomData} = this.state;
    if (!isLoading)
      return (
        <div>
          <h3 className="loading-status">Loading ... please wait</h3>{" "}
        </div>
      );
    return (
      <div>
        <div>
          {randomData.near_earth_objects?.map((items) => {
            return (
              <div key={items.id}>
                <Card {...items} />
              </div>
            );
          })}
        </div>
        <div>
          <button onClick={this.handlePrev}>Go Back</button>
        </div>
      </div>
    );
  }
}

export default WithRouting(RandomList);
