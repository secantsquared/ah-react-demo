import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export default function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody characters={props.characters} />
    </table>
  )
}

// <table>
//</table>

//<thead>
//</thead>

//tr
//th name th job
