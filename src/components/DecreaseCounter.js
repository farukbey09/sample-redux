import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { decreaseCounter } from "../redux/actions/counterActions";

class DecreaseCounter extends Component {
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
            this.props.dispatch(decreaseCounter());
          }}
        >
          decrease 1
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(DecreaseCounter);
