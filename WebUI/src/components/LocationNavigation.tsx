import React from 'react'
import { Nav } from 'react-bootstrap';


interface LocationNavigationProps {
  onLocationChange: (clickedLocation: string) => void;
  selectedLocation: string;
};

function LocationNavigation(props:LocationNavigationProps) {
    return(
          <nav className="nav nav-tabs navbar-light bg-light" onSelect={()=>{console.log("clicked something");}}>
                  <Nav.Item>
                        <Nav.Link eventKey="Lossburg" onClick={() => { props.onLocationChange("Lossburg"); }}>DE- Lossburg</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={(event:React.MouseEvent<HTMLAnchorElement>) => { props.onLocationChange("Radevormwald"); }}>DE - Radevormwald</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link onClick={(event:React.MouseEvent<HTMLAnchorElement>) => { props.onLocationChange("Rednitzhembach"); }}>DE- Rednitzhembach</Nav.Link>
                    </Nav.Item>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Others</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" >BE - Standort Who</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" >US- Standort XY</a>
                    <a className="dropdown-item" >US - Standort Z</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" >DK - Standort XYZ</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" >NL - Standort XYZ</a>
                </div>
            </li>
          </nav>
    );
    
};

export default LocationNavigation;