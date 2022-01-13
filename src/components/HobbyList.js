import React, { useContext } from "react"
import { HobbiesContext } from "../context/HobbiesContext"
import Hobby from "./Hobby"

export default function HobbyList() {
    const { hobbies, handleRemoveHobby } = useContext(HobbiesContext)

    const removeHobby = (id) => {
        handleRemoveHobby(id)
    }

    let title = hobbies.length !== 0 ? <h3>Hobbies</h3> : <h3>No hobbies</h3>

    return (
        <div>
            {title}
            <ul>
                {hobbies.map((h) => {
                    return (
                        <Hobby
                            key={h.id}
                            hobby={h}
                            handleRemoveHobby={removeHobby}
                        />
                    )
                })}
            </ul>
        </div>
    )
}
