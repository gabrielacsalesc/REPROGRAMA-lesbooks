import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Projeto from '../pages/Projeto'
import Autoras from '../pages/Autoras'
import Sobremim from '../pages/Sobremim'
import Formulario from '../Formulario'




const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'component={Home} />
                <Route path='/projeto'component={Projeto} />
                <Route path='/autoras'component={Autoras} />
                <Route path='/sobremim'component={Sobremim} />
                <Route path='/formulario'component={Formulario} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes