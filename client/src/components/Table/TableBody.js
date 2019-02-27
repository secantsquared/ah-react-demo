import React from 'react'
import uuidv4 from 'uuid'

export default function TableBody({ characters, handleDelete, toggleEdit }) {
  return (
    <tbody>
      {characters.map(character => {
        return (
          <tr key={uuidv4()}>
            <td>{character.name}</td>
            <td>{character.job}</td>
            <td>
              <button onClick={() => handleDelete(character.id)}>Delete</button>
            </td>
            <td>
              <button onClick={toggleEdit}>Edit</button>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}
