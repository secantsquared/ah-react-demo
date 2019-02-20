import React from 'react'
import NameInput from './NameInput'
import JobInput from './JobInput'

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <NameInput name={props.name} onNameChange={props.onNameChange} />
      <JobInput />
    </form>
  )
}
