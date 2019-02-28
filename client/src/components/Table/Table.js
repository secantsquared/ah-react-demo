import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default function Table({
  characters,
  handleDelete,
  toggleEdit,
  setCurrentId,
}) {
  return (
    <table>
      <TableHeader />
      <TableBody
        characters={characters}
        handleDelete={handleDelete}
        toggleEdit={toggleEdit}
        setCurrentId={setCurrentId}
      />
    </table>
  )
}
