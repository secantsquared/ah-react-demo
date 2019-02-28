import React from 'react'
import NameInput from './NameInput'
import JobInput from './JobInput'

export default function Form({
  isEditing,
  handleEdit,
  handleSubmit,
  name,
  job,
  handleChange,
  setCurrentId,
}) {
  return (
    <form onSubmit={isEditing ? handleEdit : handleSubmit}>
      <NameInput
        name={name}
        job={job}
        handleChange={handleChange}
        setCurrentId={setCurrentId}
      />
      <JobInput
        job={job}
        handleChange={handleChange}
        setCurrentId={setCurrentId}
      />
      <input type="submit" value={isEditing ? 'update' : 'submit'} />
    </form>
  )
}
