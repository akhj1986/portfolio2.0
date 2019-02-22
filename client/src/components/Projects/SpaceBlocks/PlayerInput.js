import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Conditional from "./Conditional";
import styles from "./playerInput.module.scss";
import { connect } from "react-redux";
import { postScore } from "../../../store/actions/scoreLog";

class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.postScore(this.state.playerName, this.props.score);
  }

  render() {
    if (this.props.toTable === true) {
      return <Redirect exact to="/spaceblocks/scores" />;
    }
    return (
      <div className={styles.container}>
        <h1>You scored {this.props.score} points!</h1>
        <h2>Please type your alias and submit to log your score!</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input-field"
            type="text"
            name="playerName"
            value={this.state.playerName}
            onChange={this.handleChange}
            placeholder="Please enter your name"
          />
          <button className="submit-button">Submit</button>
        </form>
        <Conditional
          submitting={this.props.submitting}
          error={this.props.errRender}
        />
        {this.props.errRender ? (
          <div className={styles.errorDiv}>
            <span>Try submitting again...or</span>
            <Link to="/spaceblocks/scores">Continue without posting score</Link>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    score: state.spaceBlocks.score,
    toTable: state.spaceBlocks.toTable,
    submitting: state.spaceBlocks.submitting,
    errRender: state.spaceBlocks.errRender
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postScore: (playerName, score) => dispatch(postScore(playerName, score))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerInput);
