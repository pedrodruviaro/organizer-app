import React from "react";
import { Dashboard } from "./styles";
import Header from "../../components/Header";
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/Footer/index";
import TodoList from "../../components/TodoList";
import SidebarMenu from "../../components/SidebarMenu";

export default function Index() {
    return (
        <Dashboard>
            <Header />

            <SidebarMenu
                todoPath="/dashboard/todo-list"
                notesPath="/dashboard/notes"
            />
            <main>
                <Switch>
                    <Route
                        exact
                        path="/dashboard/todo-list"
                        component={TodoList}
                    />
                </Switch>
            </main>

            <Footer />
        </Dashboard>
    );
}
