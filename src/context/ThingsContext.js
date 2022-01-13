import React, { createContext, useState } from 'react'

export const ThingsContext = createContext({
    things: []
})

export default function ThingsContextProvider({ children }) {

    const [things, setThings] = useState([
        {id: 1, name: 'lamp'}, {id: 2, name: 'cards'}, {id: 3, name: 'knife'}
    ])

    const context = {
        things: things
    }

    return (
        <ThingsContext.Provider value={context}>
            {children}
        </ThingsContext.Provider>
    )
}
