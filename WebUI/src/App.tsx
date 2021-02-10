import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Container, NavItem } from 'react-bootstrap';

import logo from './logo.png';

import Header from './components/Header';
import TopNavigation from './components/TopNavigation';
import PropertyManagement from './components/Pages/EditUserPage';
import AccountManagementPage from './components/Pages/AccountManagementPage';
import SubNavigation from './components/SubNavigation';
import Content from './components/Pages/Content';
import Pages from './components/Pages/Pages';
import IUserResponsePayload from './api/IUserResponsePayload';


function App() {

  const [activeTab, setActiveTab] = useState<Pages>(Pages.Accountmanagment);

  const [users, setUsers] = useState<Array<IUserResponsePayload>>([]);
  const [usersLoaded, setUsersLoaded] = useState<boolean>(false);

  const handleTabChange = (clickedTab: Pages) => {
    setActiveTab(clickedTab);
  }

  useEffect(() => {

    if (usersLoaded == false) {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response);
                setUsersLoaded(true);
                setUsers(response.data);
            })
    }
})

  return (
    <Container className="container-fluid">

      <Header />
      <TopNavigation />
      <SubNavigation activeTab={activeTab} onTabChange={handleTabChange}/>
      
      <Content activeTab={activeTab} users={users}></Content>
 
    </Container>
  );
}

export default App;
