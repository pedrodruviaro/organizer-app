import React from "react";
import { Link } from "react-router-dom";
import { SidebarMenu } from "./styles";
import { FaRegStickyNote } from "react-icons/fa";
import { RiTaskLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { BsArrowBarRight } from "react-icons/bs";

export default function Index(props) {
    const links = [
        {
            path: props.todoPath,
            icon: <RiTaskLine />,
            label: "Todos",
        },
        {
            path: props.notesPath,
            icon: <FaRegStickyNote />,
            label: "Notes",
        },
    ];

    return (
        <SidebarMenu>
            <nav>
                <ul>
                    <li className="logo">
                        <span>Organizer</span>
                        <BsArrowBarRight />
                    </li>
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link to={link.path}>
                                {link.icon}
                                <span className="link-text">{link.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <button>
                    <FiLogOut />
                    <span className="link-text">Logout</span>
                </button>
            </nav>
        </SidebarMenu>
    );
}
