import React, { Component } from 'react'
import { characters } from './Characters'
import Form from './components/Form/Form.js'
import Table from './components/Table/Table'
export default class App extends Component {
  state = {
    characters: [],
    name: ''
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

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ characters: [...characters, { name: this.state.name }], name: '' })
  }

  render() {
    return (
      <>
        <Form
          name={this.state.name}
          onNameChange={this.onNameChange}
          handleSubmit={this.handleSubmit}
        />
        <Table characters={this.state.characters} />
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
