import React from 'react'
import uuidv4 from 'uuid'

export default function TableBody(props) {
  console.log(props)
  return (
    <tbody>
      {props.characters.map(character => {
        return (
          <tr key={uuidv4()}>
            <td>{character.name}</td>
            <td>{character.job}</td>
            <td>
              <button onClick={() => props.handleDelete(character.id)}>
                Delete
              </button>
            </td>
            <td>
              <button onClick={() => props.toggleEdit(character.id)}>
                Edit
              </button>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}
