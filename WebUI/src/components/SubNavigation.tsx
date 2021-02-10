import React from 'react'
import { Nav } from 'react-bootstrap';
import Pages from './Pages/Pages';
import Tab from './Pages/Pages';

interface SubNavigationProps {
    activeTab: Pages;
    onTabChange: (clickedTab: Pages) => void;
};

function SubNavigation(props:SubNavigationProps) {
    return (
        <Nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar2">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbar2">
                <ul className="navbar-nav">
                <Nav.Item>
                        <Nav.Link eventKey={Pages.Accountmanagment} onClick={() => { props.onTabChange(Pages.Accountmanagment); }}>Kontoverwaltung</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={Pages.Edit} onClick={() => { props.onTabChange(Pages.Edit); }}>Benutzerverwaltung</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={Pages.Create} onClick={() => { props.onTabChange(Pages.Create); }}>Benutzer anlegen</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={Pages.Delete} onClick={() => { props.onTabChange(Pages.Delete); }}>Benutzer löschen</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={Pages.Copy} onClick={() => { props.onTabChange(Pages.Copy); }}>Benutzer kopieren</Nav.Link>
                    </Nav.Item>

       
        
                </ul>
            </div>
        </Nav>
    );

};

export default SubNavigation;