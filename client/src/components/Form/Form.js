import React from 'react'
import NameInput from './NameInput'
import JobInput from './JobInput'

export default function Form(props) {
  const { name, job, onNameChange, onJobChange } = props
  return (
    <form onSubmit={props.handleSubmit}>
      <NameInput name={name} job={job} onNameChange={onNameChange} />
      <JobInput job={job} onJobChange={onJobChange} />
      <input type="submit" value="submit" />
    </form>
  )
}
