import React from "react";
import { Dashboard } from "./styles";
import Header from "../../components/Header";
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/Footer/index";
import CreateTodoList from "../../components/CreateTodoList";
import SidebarMenu from "../../components/SidebarMenu";
import CreateNote from "../../components/CreateNote/index";

export default function Index() {
    return (
        <Dashboard>
            <Header />

            <SidebarMenu
                createTodoPath="/dashboard/create/todo-list"
                createNotesPath="/dashboard/create/notes"
            />
            <main>
                <Switch>
                    <Route
                        path="/dashboard/create/todo-list"
                        component={CreateTodoList}
                    />
                    <Route
                        path="/dashboard/create/notes"
                        component={CreateNote}
                    />
                </Switch>
            </main>

            <Footer />
        </Dashboard>
    );
}
