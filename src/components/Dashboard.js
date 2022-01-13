import React, { useContext, useRef } from "react"
import { HobbiesContext } from "../context/HobbiesContext"
import { ThingsContext } from "../context/ThingsContext"
import { UserContext } from "../context/UserContext"
import Hobby from "./Hobby"
import HobbyForm from "./HobbyForm"
import HobbyList from "./HobbyList"
import ThingList from "./ThingList"
import NewUserForm from "./UserForm"

export default function Dashboard() {
    
    const {user} = useContext(UserContext)

    return (
        <div>
            <h2>This is the Dashboard</h2>
            <p>Hi, my name is {user.name}</p>
            <p>I am {user.age} years old</p>

            <NewUserForm />
            <HobbyList />
            <HobbyForm />
            <ThingList />
        </div>
    )
}
