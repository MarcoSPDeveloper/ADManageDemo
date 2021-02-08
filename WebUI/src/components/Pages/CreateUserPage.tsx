import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Container, NavItem } from 'react-bootstrap';
import UserSelection from '../UserSelection/UserSelection';
import Logonscript from '../Logonscript/Logonscript';
import UserProperties from '../UserProperties/UserProperties';
import Delete from '../Delete/Delete';
import Create from '../Create/Create';



function CreateUserPage() {
    return(
          <Container>
            <Row>
              <Col className="col-12">
              UserSelection
              </Col>
              <Col className="col">
               <Create/>
              </Col>
            </Row>
        </Container>
    );
    
};

export default CreateUserPage;