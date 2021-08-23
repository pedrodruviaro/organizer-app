import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Dashboard } from './styles'
import Header from '../../components/Header'
import { Link, Route, Switch } from 'react-router-dom'
import Footer from '../../components/Footer/index'

export default function Index() {

    const {user} = useAuth()

    return (
        <Dashboard>
            <Header />
            
            {/* <Switch>
                <Route exact path="/dashboard/rota1" >ROTA 1</Route>
                <Route exact path="/dashboard/rota2" >ROTA 2</Route>
            </Switch> */}
            
            <Footer />
        </Dashboard>
    )
}
