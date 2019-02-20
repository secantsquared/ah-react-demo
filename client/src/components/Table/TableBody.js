import React from 'react'
import uuidv4 from 'uuid'

export default function TableBody({ characters }) {
  return (
    <tbody>
      {characters.map(character => {
        return (
          <tr key={uuidv4()}>
            <td>{character.name}</td>
            <td>{character.job}</td>
            <td>
              <button>Delete</button>
            </td>
            <td>
              <button>Edit</button>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}
