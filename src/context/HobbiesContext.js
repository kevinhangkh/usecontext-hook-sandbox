import { createContext, useState } from "react"
import React from "react"

export const HobbiesContext = createContext({
    hobbies: [],
    handleRemoveHobby: (id) => {},
    handleAddHobby: (hobby) => {}
})

export default function HobbiesContextProvider({ children }) {
    const [hobbies, setHobbies] = useState([
        { name: "bass guitar", id: 1 },
        { name: "cooking", id: 2 },
        { name: "watch tv", id: 3 },
        { name: "painting", id: 4 },
        { name: "sour cream & onion", id: 5 }
    ])

    const context = {
        hobbies: hobbies,
        handleRemoveHobby: removeHobby,
        handleAddHobby: addHobby
    }

    function removeHobby(id) {
        setHobbies((prevHobbies) => {
            return hobbies.filter((h) => h.id !== id)
        })
    }

    function addHobby(hobby) {
        setHobbies(prevHobbies => {
            return prevHobbies.concat(hobby)
        })
    }

    return (
        <HobbiesContext.Provider value={context}>
            {children}
        </HobbiesContext.Provider>
    )
}
