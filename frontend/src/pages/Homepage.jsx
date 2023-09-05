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
  updateSearchedValue = (event) => {
    this.setState({ searchedValue: event.target.value });
  };

  handleNavigateToCreate = () => {
    this.setState({ navigateToCreateNote: true });
  };

  filterNotes() {
    const regex =new RegExp(`\\b${this.state.searchedValue.toLowerCase()}`);
    const filteredNotes = this.state.notes.filter((note) =>
      regex.test(note.title.toLowerCase())
    );
    this.setState({
      filteredNotes,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchedValue !== this.state.searchedValue) {
      if (this.state.searchedValue === "") {
        this.setState({
          filteredNotes: [],
        });
      } else {
        this.filterNotes();
      }
    }
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/")
      .then((res) => res.json())
      .then((data) => this.setState({ notes: data }));
  }

  render() {
    if (this.state.navigateToCreateNote === true) {
      return <Navigate to="/create" />;
    }
    return (
      <>
        <Search updateSearchedValue={this.updateSearchedValue} />
        <NotesList
          data={
            this.state.filteredNotes.length > 0
              ? this.state.filteredNotes
              : this.state.notes
          }
        />
        <PlusCircleIcon
          className="note__add"
          onClick={this.handleNavigateToCreate}
        />
      </>
    );
  }
}
