import React from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class AddSmurfForm extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add a name..."
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.handleChanges}
        />
        <input
          placeholder="Add an age..."
          type="number"
          value={this.state.age}
          name="age"
          onChange={this.handleChanges}
        />
        <input
          placeholder="Add a height..."
          type="number"
          value={this.state.height}
          name="height"
          onChange={this.handleChanges}
        />
        <button>Add Smurf</button>
      </form>
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
  { addSmurf }
)(AddSmurfForm);
