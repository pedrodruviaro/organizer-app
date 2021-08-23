import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Header } from "./styles";
import { FcTodoList } from "react-icons/fc";

export default function Index() {
    const { user } = useAuth();

    return (
        <Header>
            <div className="logo-container">
                <FcTodoList />
                <span>Organizer App</span>
            </div>
            <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
            </div>
        </Header>
    );
}
