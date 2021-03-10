import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Home from './pages/home'
import CompanyForm from './pages/forms/CompanyForm'
import CVForm from './pages/forms/CVForm'
import CVs from './pages/CVs'
import Companies from './pages/Companies'
import SuccesfullyForm from './pages/forms/SuccessfullyForm'
import Login from './pages/Login'
import Drafts from './pages/Approve-DeclineDrafts'
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path="/CVs" component={CVs} />
        <Route  path="/Companies" component={Companies} />
        <Route  path="/CVForm" component={CVForm} />
        <Route  path="/CompanyForm" component={CompanyForm} />
        <Route  path="/SuccesfullyForm" component={SuccesfullyForm} />
        <Route  path="/Login" component={Login} />
        <Route  path="/Drafts" component={Drafts} />
        <Route  path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
