import './App.css';
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Container, NavItem } from 'react-bootstrap';

import logo from './logo.png';

import Header from './components/Header/Header';
import TopNavigation from './components/Navigation/TopNavigation';
import PropertyManagement from './components/Pages/EditUserPage';
import AccountManagementPage from './components/Pages/AccountManagementPage';
import SubNavigation from './components/Navigation/SubNavigation';
import Content from './components/Pages/Content';
import Pages from './components/Pages/Pages';


function App() {

  const [activeTab, setActiveTab] = useState<Pages>(Pages.Accountmanagment);

  const handleTabChange = (clickedTab: Pages) => {
    setActiveTab(clickedTab);
  }

  return (
    <Container className="container-fluid">

      <Header />
      <TopNavigation />
      <SubNavigation activeTab={activeTab} onTabChange={handleTabChange}/>
      
      <Content activeTab={activeTab}></Content>
 
    </Container>
  );
}

export default App;
