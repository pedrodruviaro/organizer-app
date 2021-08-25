import React from "react";
import { Link } from "react-router-dom";

// icons
import { SidebarMenu } from "./styles";
import { FaRegStickyNote } from "react-icons/fa";
import { RiTaskLine } from "react-icons/ri";
import { FiLogOut, FiList } from "react-icons/fi";
import { BsArrowBarRight } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";

export default function Index(props) {
    const links = [
        {
            path: props.createTodoPath,
            icon: <RiTaskLine />,
            label: "Create Todo",
        },
        {
            path: props.listTodoPath,
            icon: <FiList />,
            label: "Todos List",
        },
        {
            path: props.createNotesPath,
            icon: <FaRegStickyNote />,
            label: "Create Note",
        },
        {
            path: props.listNotesPath,
            icon: <CgNotes />,
            label: "Notes List",
        },
        {
            path: props.createExpenseTrackerPath,
            icon: <GiMoneyStack />,
            label: "Expense Tracker",
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
