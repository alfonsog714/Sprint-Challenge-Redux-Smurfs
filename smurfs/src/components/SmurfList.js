import React, { Component } from "react";
import { getSmurfs } from "../actions";
import { connect } from "react-redux";

import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class SmurfList extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        {this.props.smurfs.length === 0 ? (
          <h2>Loading smurfs...</h2>
        ) : (
          this.props.smurfs.map(smurf => (
            <div key={smurf.id}>
              <h4>{smurf.name}</h4>
              <ul>
                <li>Age in Smurf years: {smurf.age}</li>
                <li>Height: {smurf.height}</li>
              </ul>
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
