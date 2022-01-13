
import React, { useContext } from 'react';
import { HobbiesContext } from '../context/HobbiesContext';
import { ThingsContext } from '../context/ThingsContext';
import { UserContext } from '../context/UserContext';

const Navbar = () => {

    const { user } = useContext(UserContext);
    const { hobbies } = useContext(HobbiesContext);
    const { things } = useContext(ThingsContext)

    return (
        <header>
            <h2>Nav Bar</h2>
            <p>Hi {user.name}!</p>
            <span>{hobbies.length} hobbies</span>
            <span>{things.length} things</span>
        </header>
    );
}

export default Navbar;
