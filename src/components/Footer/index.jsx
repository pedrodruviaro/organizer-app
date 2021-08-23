import React from 'react'
import { Footer } from './styles'

export default function index() {
    return (
        <Footer>
            <nav>
                <ul>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    
                    <li>
                        <a href="#">Report bug</a>
                    </li>
                </ul>
            </nav>

            <p>&copy; Copyright 2021</p>
        </Footer>
    )
}
