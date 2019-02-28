import React from 'react'

export default function JobInput({ job, handleChange }) {
  return (
    <input
      type="text"
      name="job"
      placeholder="job"
      value={job}
      onChange={handleChange}
    />
  )
}
