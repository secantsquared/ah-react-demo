import React, { Component } from 'react'
import { characters } from '../data/Characters'
import Form from './Form/Form'
import Table from './Table/Table'
import uuidv4 from 'uuid'
import './App.css'

export default class App extends Component {
  state = {
    characters: [],
    name: '',
    job: '',
    isEditing: false,
    currentId: '',
  }

  componentDidMount() {
    this.setState({
      characters,
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    const { name, job, characters } = this.state

    if (!name || !job) {
      alert('Please fill out both fields.')
    } else {
      e.preventDefault()
      this.setState({
        characters: [...characters, { name, job, id: uuidv4() }],
        name: '',
        job: '',
      })
    }
  }

  handleDelete = id => {
    const { characters } = this.state
    const notDeleted = characters.filter(character => character.id !== id)
    this.setState({
      characters: notDeleted,
    })
  }

  toggleEdit = () => {
    this.setState(prevState => {
      return {
        isEditing: !prevState.isEditing,
      }
    })
  }

  setCurrentId = id => {
    this.setState({ currentId: id })
  }

  handleEdit = e => {
    e.preventDefault()
    const { characters, job, name, currentId } = this.state
    const index = characters.findIndex(character => character.id === currentId)
    this.setState(prevState => {
      return {
        characters: [
          ...characters.slice(0, index),
          { name, job },
          ...characters.slice(index + 1),
        ],
        name: '',
        job: '',
        isEditing: !prevState.isEditing,
      }
    })
  }

  render() {
    const { characters, name, job, isEditing } = this.state
    return (
      <div className="medium-container alternate-background">
        <Table
          characters={characters}
          handleDelete={this.handleDelete}
          toggleEdit={this.toggleEdit}
          setCurrentId={this.setCurrentId}
        />
        <Form
          name={name}
          job={job}
          isEditing={isEditing}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleReset={this.handleReset}
          handleEdit={this.handleEdit}
        />
      </div>
    )
  }
}
