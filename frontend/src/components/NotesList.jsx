import React, { Component } from 'react'
import './NotesList.css'
import Note from './Note'

export default class NotesList extends Component {

  render() {
    return (
      <main className='notes--list'>
        {/* Map over the data array and render a Note component for each note */}
        {this.props.data.map(note => {
          return <Note key={note.id} note={note} />
        })}
      </main>
    )
  }
}
