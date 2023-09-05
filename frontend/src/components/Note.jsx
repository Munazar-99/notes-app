import React, { Component } from "react";
import "./Note.css";
import { Navigate } from "react-router-dom";

export default class Note extends Component {
  state = {
    navigateToNote: false,
  };

  // Handler for navigating to the individual note page
  handleNavigateToNote = () => {
    this.setState({ navigateToNote: true });
  };

  render() {
    // Redirect to the individual note page if navigateToNote is true
    if (this.state.navigateToNote === true) {
      return <Navigate to={`/note/${this.props.note.id}`} />;
    }

    return (
      <section onClick={this.handleNavigateToNote} className="note">
        <article className="title-container">
          <h3 className="note--title">{this.props.note.title}</h3>
        </article>
        <article className="title-container">
          <h4 className="note--body">{this.props.note.body}</h4>
        </article>
      </section>
    );
  }
}
