import React from "react";
import { Dashboard } from "./styles";
import Header from "../../components/Header";
import { Route, Switch } from "react-router-dom";
import Footer from "../../components/Footer/index";
import CreateTodoList from "../../components/CreateTodoList";
import SidebarMenu from "../../components/SidebarMenu";
import CreateNote from "../../components/CreateNote/index";
import NotesList from "../../components/NotesList/index";
import TodoList from "../../components/TodoList/index";
import ExpenseTracker from '../../components/ExpenseTracker/index'

export default function Index() {
    return (
        <Dashboard>
            <Header />

            <SidebarMenu
                createTodoPath="/dashboard/create/todos"
                listTodoPath="/dashboard/list/todos"
                createNotesPath="/dashboard/create/notes"
                listNotesPath="/dashboard/list/notes"
                createExpenseTrackerPath="/dashboard/expense-tracker"
            />
            <main>
                <Switch>
                    <Route
                        path="/dashboard/create/todos"
                        component={CreateTodoList}
                    />
                    <Route
                        path="/dashboard/list/todos"
                        component={TodoList}
                    />
                    <Route
                        path="/dashboard/create/notes"
                        component={CreateNote}
                    />
                    <Route
                        path="/dashboard/list/notes"
                        component={NotesList}
                    />
                    <Route
                        path="/dashboard/expense-tracker"
                        component={ExpenseTracker}
                    />
                </Switch>
            </main>

            <Footer />
        </Dashboard>
    );
}
