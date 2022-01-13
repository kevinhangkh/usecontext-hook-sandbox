import React, { useContext, useRef } from "react"
import { UserContext } from "../context/UserContext"

export default function NewUserForm() {
    const { user, changeName, changeAge } = useContext(UserContext)

    const formRef = useRef()
    const nameInput = useRef()
    const ageInput = useRef()

    const handleChangeName = (event) => {
        event.preventDefault()
        changeName("Jim")
    }
    const handleChangeAge = (event) => {
        event.preventDefault()
        changeAge("30")
    }
    const handleChangeUser = (event) => {
        event.preventDefault()

        const name = nameInput.current.value
        const age = ageInput.current.value

        if (name !== "" && age !== "") {
            changeName(name)
            changeAge(age)
        } else if (name !== "") changeName(name)
        else if (age !== "") changeAge(age)

        formRef.current.reset()
    }

    return (
        <form onSubmit={handleChangeAge} ref={formRef}>
            <h3>User Form</h3>

            <label htmlFor="name">Name</label>
            <input id="name" type="text" ref={nameInput} />

            <label htmlFor="age">Age</label>
            <input id="age" type="number" ref={ageInput} />

            <button onClick={handleChangeUser}>Submit</button>
            <button onClick={handleChangeName}>Change name</button>
            <button type="submit">Change age</button>
        </form>
    )
}
