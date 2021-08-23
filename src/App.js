import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/Themes";
import { ResetStyles } from "./styles/ResetStyles";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContext'
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <ResetStyles />

            <AuthContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={LoginPage} />
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                    </Switch>
                </BrowserRouter>
            </AuthContextProvider>
        </ThemeProvider>
    );
}

export default App;
