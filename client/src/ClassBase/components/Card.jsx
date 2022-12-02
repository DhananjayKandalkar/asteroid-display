import React from "react";

class Card extends React.Component {
    render(){
        return (
          <div className="card-container">
            <h3>Name of Asteroid : {this.props.name}</h3>
            <div>
              <p>Neo Reference ID : {this.props.neo_reference_id}</p>
            </div>
          </div>
        );
    }
};

export default Card;