import React from 'react'
import NameInput from './NameInput'
import JobInput from './JobInput'

export default function Form(props) {
  return (
    <form onSubmit={props.isEditing ? props.handleEdit : props.handleSubmit}>
      <NameInput
        name={props.name}
        job={props.job}
        onNameChange={props.onNameChange}
      />
      <JobInput job={props.job} onJobChange={props.onJobChange} />
      <input type="submit" value={props.isEditing ? 'updating' : 'submit'} />
    </form>
  )
}
