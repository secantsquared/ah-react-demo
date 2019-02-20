import React from 'react'

export default function JobInput({ job, onJobChange }) {
  return (
    <input
      type="text"
      placeholder="job"
      value={job}
      onChange={e => onJobChange(e.target.value)}
    />
  )
}
