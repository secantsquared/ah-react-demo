import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default function Table({ characters, handleDelete, toggleEdit, id }) {
  return (
    <table>
      <TableHeader />
      <TableBody
        characters={characters}
        handleDelete={handleDelete}
        id={id}
        toggleEdit={toggleEdit}
      />
    </table>
  )
}

// <table>
//</table>

//<thead>
//</thead>

//tr
//th name th job
