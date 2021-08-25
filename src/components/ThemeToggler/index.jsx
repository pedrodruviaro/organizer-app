import React from 'react'
import { ThemeToggler } from './styles'
import { FaMoon, FaSun  } from "react-icons/fa";


export default function Index() {
    return (
        <ThemeToggler>
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label for="checkbox" className="label" >
                <FaMoon className="moon" />
                <FaSun className="sun" />
                <div className="ball"></div>
            </label>
        </ThemeToggler>
    )
}
