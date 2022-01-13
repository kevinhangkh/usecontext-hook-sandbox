import React, { useState } from "react"
import { createContext } from "react"

export const UserContext = createContext({
    user: {
        name: "",
        age: 0
    },
    changeName: (name) => {},
    changeAge: (age) => {}
})

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState({
        name: "Kevin",
        age: 28
    })

    const context = {
        user: user,
        changeName: changeName,
        changeAge: changeAge
    }

    function changeName(newName) {
        setUser((prevUser) => {
            return {
                ...prevUser,
                name: newName
            }
        })
    }

    function changeAge(newAge) {
        setUser((prevUser) => {
            return {
                ...prevUser,
                age: newAge
            }
        })
    }

    return (
        <UserContext.Provider value={context}>{children}</UserContext.Provider>
    )
}
