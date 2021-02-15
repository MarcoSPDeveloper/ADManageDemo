import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import LocationNavigation from './components/LocationNavigation';
import SubNavigation from './components/SubNavigation';
import Content from './components/Pages/Content';
import Pages from './components/Pages/Pages';
import IUserResponsePayload from './api/IUserResponsePayload';
import ILocationResposePayload from './api/ILocationResponsePayload';


function App() {

  const [activeLocation, setActiveLocation] = useState<string>("Lossburg");
  const [activeTab, setActiveTab] = useState<Pages>(Pages.Accountmanagment);

  const [users, setUsers] = useState<Array<IUserResponsePayload>>([]);
  const [usersLoaded, setUsersLoaded] = useState<boolean>(false);

  const [locations, setLocations] = useState<Array<ILocationResposePayload>>([]);
  const [locationsLoaded, setLocationsLoaded] = useState<boolean>(false);

  const handleTabChange = (clickedTab: Pages) => {
    setActiveTab(clickedTab);
  }

  const handleLocationChange = (clickedLocation: string) => {
    setActiveLocation(clickedLocation);
    setUsersLoaded(false);
    console.log(clickedLocation);
  }

  useEffect(() => {

    if (usersLoaded === false) {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                console.log(response);
                setUsersLoaded(true);
        
                //Manupulate name for demo, simulate the location
                for (let i = 0; i < response.data.length; i++) {
                  response.data[i].name = response.data[i].name + "_" + activeLocation;
                }

                setUsers(response.data);

            })
    }
})

useEffect(() => {

  if (locationsLoaded === false) {
      //axios.get("https://localhost:44328/API/Locations")
      //    .then(response => {
      //        console.log(response);
      //        setLocationsLoaded(true);
      //        setLocations(response.data);

      //    })
  }
})

  return (
    <Container className="container-fluid">

      <Header />
      <LocationNavigation selectedLocation="Lossburg" onLocationChange={handleLocationChange} />
      <SubNavigation activeTab={activeTab} onTabChange={handleTabChange}/>
      
      <Content activeTab={activeTab} users={users}></Content>
 
    </Container>
  );
}

export default App;
