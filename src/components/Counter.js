import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: "45px" }}>{this.props.counter}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counterReducers };
}

export default connect(mapStateToProps)(Counter);
