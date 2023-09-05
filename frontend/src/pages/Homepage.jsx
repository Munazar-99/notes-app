import React, { Component } from "react";
import Search from "../components/Search";
import "./Homepage.css";
import NotesList from "../components/NotesList";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Navigate } from "react-router-dom";

export default class Homepage extends Component {
  state = {
    notes: [],
    filteredNotes: [],
    searchedValue: "",
    navigateToCreateNote: false,
  };

  // Handler for updating the search input value in the state
  updateSearchedValue = (event) => {
    this.setState({ searchedValue: event.target.value }, this.filterNotes);
  };

  // Handler for navigating to the create note page
  handleNavigateToCreate = () => {
    this.setState({ navigateToCreateNote: true });
  };

  // Filter notes based on the search input value
  filterNotes() {
    const { searchedValue, notes } = this.state;
    const regex = new RegExp(`\\b${searchedValue.toLowerCase()}`);
    const filteredNotes = notes.filter((note) =>
      regex.test(note.title.toLowerCase())
    );
    this.setState({ filteredNotes });
  }

  componentDidMount() {
    // Fetch notes data from the API
    fetch("http://127.0.0.1:8000/api/")
      .then((res) => res.json())
      .then((data) => this.setState({ notes: data }));
  }

  render() {
    // Redirect to the create note page if navigateToCreateNote is true
    if (this.state.navigateToCreateNote) {
      return <Navigate to="/create" />;
    }

    // Determine which set of notes to display based on search
    const displayedNotes =
      this.state.filteredNotes.length > 0
        ? this.state.filteredNotes
        : this.state.notes;

    return (
      <>
        {/* Search component */}
        <Search updateSearchedValue={this.updateSearchedValue} />

        {/* NotesList component */}
        <NotesList data={displayedNotes} />

        {/* Create note button */}
        <PlusCircleIcon
          className="note__add"
          onClick={this.handleNavigateToCreate}
        />
      </>
    );
  }
}
