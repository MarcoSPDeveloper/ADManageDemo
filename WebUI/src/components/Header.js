import React from 'react'
import { Col, Row } from 'react-bootstrap';
import logo from "../assets/logo.PNG"; //TODO: this will not work any logner if we nename the file to .ts

function Header() {

    return (
        <Row >
            <Col sm="auto" >
                <img src={logo} alt="Logo" className="mr-4" />
            </Col>

            <Col sm="auto">
                <h1>new ADManage</h1>
            </Col>
        </Row>


    );
}


export default Header;