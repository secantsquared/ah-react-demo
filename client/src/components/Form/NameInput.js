import React from 'react'

export default function NameInput(props) {
  const handleChange = e => {
    props.onNameChange(e.target.value)
  }

  return (
    <>
      <input type="text" placeholder="name" value={props.name} onChange={handleChange} />
      <input type="submit" value="submit" />
    </>
  )
}
