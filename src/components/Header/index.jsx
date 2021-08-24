import moment from "moment";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Header } from "./styles";

export default function Index() {
    const { user } = useAuth();

    return (
        <Header>
            <span className="timestamp">{moment().format('MMM Do YYYY')}</span>
            <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
            </div>
        </Header>
    );
}
