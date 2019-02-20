import React, { Component } from 'react'
import { characters } from '../data/Characters'
import Form from './Form/Form'
import Table from './Table/Table'

export default class App extends Component {
  state = {
    characters: [],
    name: '',
    job: ''
  }

  componentDidMount() {
    this.setState({
      characters
    })
  }

  onNameChange = name => {
    this.setState({
      name
    })
  }

  onJobChange = job => {
    this.setState({
      job
    })
  }

  handleSubmit = e => {
    const { name, job, characters } = this.state

    if (!name || !job) {
      alert('Please fill out both fields.')
    } else {
      e.preventDefault()
      this.setState({
        characters: [...characters, { name, job }],
        name: '',
        job: ''
      })
    }
  }

  render() {
    const { characters, name, job } = this.state
    return (
      <>
        <Form
          name={name}
          job={job}
          onNameChange={this.onNameChange}
          handleSubmit={this.handleSubmit}
          onJobChange={this.onJobChange}
          handleReset={this.handleReset}
        />
        <Table characters={characters} />
      </>
    )
  }
}
//* 2 INPUTS = NAME INPUT && JOB INPUT
//* FORM (PARENT OF INPUTS)
//* APP --> RENDER IT ALL <FORM/> IN APP

//* TABLE
//* TABLE HEADER TABLE BODY (2 COMPONENTS)
//* 2 BUTTONS --> ADD DELETE // ADD EDIT
