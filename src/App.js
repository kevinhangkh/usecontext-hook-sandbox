import React from "react"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import HobbiesContextProvider from "./context/HobbiesContext"
import ThingsContextProvider from "./context/ThingsContext"
import UserContextProvider from "./context/UserContext"

function App() {
    return (
        <UserContextProvider>
            <HobbiesContextProvider>
                <ThingsContextProvider>
                <div>
                    <Navbar />
                    <Dashboard />
                </div>
                </ThingsContextProvider>
            </HobbiesContextProvider>
        </UserContextProvider>
    )
}

export default App
