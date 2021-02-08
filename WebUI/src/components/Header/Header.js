import React from 'react'
import { Col, Row } from 'react-bootstrap';
import logo from './logo.PNG';

function Header()
{
    return(
    <Row >
        <Col sm="auto" >
            <img src={logo} alt="GfK Logo" className="mr-4"  />
        </Col>

            <Col sm="auto">
                <h1>Arburg ADManage</h1>
            </Col>
    </Row>
            

    );
}


export default Header;