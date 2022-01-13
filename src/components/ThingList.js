import React, { useContext } from 'react'
import { ThingsContext } from '../context/ThingsContext'
import Thing from './Thing'

export default function ThingList() {

    const {things} = useContext(ThingsContext)

    return (
        <div>
            <h3>Things</h3>
            <ul>
                {things.map(t => {
                    return (
                        <Thing key={t.id} name={t.name}/>
                    )
                })}
            </ul>
            
        </div>
    )
}
