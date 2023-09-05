import React, { Component } from "react";
import "./Notespage.css";
import { ChevronLeftIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Navigate } from "react-router-dom";

export default class Notespage extends Component {
  state = {
    note: {},
    toDashboard: false,
    newNote: false,
    body: "",
    title: "",
    updated: false,
  };

  componentDidMount() {
    // Check if the URL contains a note ID, if yes, fetch the note data
    const regex = /\/(\d+)/;
    const match = window.location.pathname.match(regex);

    if (match) {
      const noteId = parseInt(match[1]);
      fetch(`http://127.0.0.1:8000/api/note/${noteId}`)
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            note: data,
            title: data.title,
            body: data.body,
          })
        );
    } else {
      this.setState({ newNote: true });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if title or body has been updated
    if (
      prevState.title !== this.state.title ||
      prevState.body !== this.state.body
    ) {
      this.setState({ updated: true });
    }
  }

  handleBack = () => {
    // Handle navigation back to the dashboard
    if (!this.state.title && !this.state.body && !this.state.updated) {
      this.setState({ toDashboard: true });
    } else if (this.state.newNote) {
      // Handle adding a new note
      fetch("http://127.0.0.1:8000/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.state.title,
          body: this.state.body,
        }),
      }).then(() => this.setState({ toDashboard: true }));
    } else {
      // Handle updating an existing note
      if (!this.state.title && !this.state.body) {
        this.handleDelete();
      } else {
        fetch(`http://127.0.0.1:8000/api/update/${this.state.note.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: this.state.title,
            body: this.state.body,
          }),
        })
          .then(() => this.setState({ toDashboard: true }))
          .catch((err) => console.log(err.message));
      }
    }
  };

  handleDelete = () => {
    // Handle deleting an existing note
    fetch(`http://127.0.0.1:8000/api/delete/${this.state.note.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => this.setState({ toDashboard: true }));
  };

  render() {
    // Redirect to the dashboard if needed
    if (this.state.toDashboard === true) {
      return <Navigate to="/" />;
    }

    return (
      <main className="notes-container">
        <form className="notes-form">
          <input
            defaultValue={this.state.title || ""}
            type="text"
            name="notes"
            className="input--title"
            placeholder="Title"
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <textarea
            defaultValue={this.state.body || ""}
            type="text"
            className="input--body"
            placeholder="What's up..."
            onChange={(e) => this.setState({ body: e.target.value })}
          />
        </form>
        <ChevronLeftIcon className="icon__back" onClick={this.handleBack} />
        {!this.state.newNote && (
          <TrashIcon className="icon__delete" onClick={this.handleDelete} />
        )}
      </main>
    );
  }
}
