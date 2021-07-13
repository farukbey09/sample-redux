import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { increaseCounter } from "../redux/actions/counterActions";

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          style={{
            height: "45px",
            width: "100px",
            border: "1px black",
            borderRadius: "50%",
            backgroundColor: "#ead7d7",
            cursor: "pointer",
          }}
          onClick={(e) => {
            this.props.dispatch(increaseCounter());
          }}
        >
          increase 1
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseCounter);
