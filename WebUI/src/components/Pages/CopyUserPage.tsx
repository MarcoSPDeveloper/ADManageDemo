import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, NavItem } from 'react-bootstrap';
import UserSelection from '../UserSelection/UserSelection';
import Copy from '../Copy/Copy';



function CopyUserPage() {
    return(
          <Container>
            <Row>
              <Col className="col-12">
                UserSelection
              </Col>
              <Col className="col">
               <Copy/>
              </Col>
            </Row>
        </Container>
    );
    
};

export default CopyUserPage;