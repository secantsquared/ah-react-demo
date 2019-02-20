import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default function Table({ characters }) {
  return (
    <table>
      <TableHeader />
      <TableBody characters={characters} />
    </table>
  )
}

// <table>
//</table>

//<thead>
//</thead>

//tr
//th name th job
