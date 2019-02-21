import React from "react";

const IsSubmitting = props => {
  return <div>{props.submitting ? <h1>Please wait...</h1> : null}</div>;
};

export default IsSubmitting;
