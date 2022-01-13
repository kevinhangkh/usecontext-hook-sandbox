import React, { useContext, useRef } from "react"
import { HobbiesContext } from "../context/HobbiesContext"

export default function HobbyForm() {
    const { handleAddHobby } = useContext(HobbiesContext)

    const formRef = useRef()
    const hobbyInput = useRef()

    function submitHobby(event) {
        event.preventDefault()

        if (hobbyInput.current.value === "") return

        const hobby = {
            id: Date.now(),
            name: hobbyInput.current.value
        }

        handleAddHobby(hobby)
        formRef.current.reset()
    }

    return (
        <form onSubmit={submitHobby} ref={formRef}>
            <h3>Add a Hobby</h3>
            <label htmlFor="hobby">Hobby</label>
            <input type="text" id="hobby" ref={hobbyInput} />
            <button type="submit">Submit</button>
        </form>
    )
}
