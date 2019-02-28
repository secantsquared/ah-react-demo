import React from 'react'

export default function NameInput({ name, handleChange }) {
  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={name}
        onChange={handleChange}
      />
    </>
  )
}
