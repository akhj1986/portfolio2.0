import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import IsSubmitting from "./IsSubmitting";
import styles from "./playerInput.module.scss";

const axios = require("axios");

class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      playerScore: this.props.score,
      toTable: false,
      isSubmitting: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loading = this.loading.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  loading() {
    this.setState({
      isSubmitting: true
    });
  }

  handleSubmit(event) {
    this.loading();
    event.preventDefault();
    axios
      .post("https://spaceblocksattack.herokuapp.com/api/scores", {
        name: this.state.playerName,
        score: this.state.playerScore
      })
      .then(() => {
        this.setState({
          toTable: true
        });
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  render() {
    if (this.state.toTable === true) {
      return <Redirect exact to="/spaceblocks/scores" />;
    }
    return (
      <div className={styles.container}>
        <h1>You scored {this.state.playerScore} points!</h1>
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
        <IsSubmitting submitting={this.state.isSubmitting} />
      </div>
    );
  }
}

export default PlayerInput;
