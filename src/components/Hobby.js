import React from "react"

export default function Hobby({ hobby, handleRemoveHobby }) {

    function removeHobby() {
        handleRemoveHobby(hobby.id)
    }

    return (
        <li>
            {hobby.name}
            <button onClick={removeHobby}>Remove</button>
        </li>
    )
}
