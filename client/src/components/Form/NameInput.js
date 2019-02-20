import React from 'react'

export default function NameInput({ name, onNameChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={e => onNameChange(e.target.value)}
      />
    </>
  )
}
