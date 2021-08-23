import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarMenu } from './styles'
import { GrNote } from "react-icons/gr";
import { RiTaskLine } from "react-icons/ri";



export default function Index(props) {

    const links = [
        {
            path: props.todoPath,
            icon: <RiTaskLine />,
            label: "Todos"
        },
        {
            path: props.notesPath,
            icon: <GrNote />,
            label: "Notes"
        }
    ]

    return (
        <SidebarMenu>
            <nav>
                <ul>
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link to={link.path}>
                                {link.icon}
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <button>Logout</button>
        </SidebarMenu>
    )
}
