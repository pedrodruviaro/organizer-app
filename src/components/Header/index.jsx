import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Header } from "./styles";

export default function Index() {
    const { user } = useAuth();

    return (
        <Header>
            <span>Organizer App</span>
            <div>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
            </div>
        </Header>
    );
}
