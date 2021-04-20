import React from "react";
import PropTypes from "prop-types"; /**Use for props type checking */
// import React, { Component } from "react";

/* Convert class based components to stateless functional components */
const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return <i className={classes} onClick={props.onLike} style={{ cursor: "pointer" }} aria-hidden="true"></i>;
};

Like.propType = {
  props: PropTypes.func.isRequired,
};

export default Like;

/* Class based components */
// class Like extends Component {
//   render() {
//     let classes = "fa fa-heart";
//     if (!this.props.liked) classes += "-o";
//     return <i className={classes} onClick={this.props.onLike} aria-hidden="true"></i>;
//   }
// }

// export default Like;
