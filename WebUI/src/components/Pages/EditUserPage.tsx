import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { Container, NavItem } from 'react-bootstrap';
import UserSelection from '../UserSelection';
import Logonscript from '../Logonscript';
import UserProperties from '../UserProperties';
import IUserResponsePayload from '../../api/IUserResponsePayload';

interface EditUserPageProps {
  users: IUserResponsePayload[];
}

function EditUserPage(props: EditUserPageProps) {
  const [selectedUser, setSelectedUser] = useState<IUserResponsePayload| undefined>(undefined);

  const handleUserChange = (selectedUser: IUserResponsePayload) => {
    setSelectedUser(selectedUser);
  }

    return(
          <Container>
            <Row>
              <Col className="col-12">
              <UserSelection onUserChange={handleUserChange}  selectableUsers={props.users}/>
              </Col>
              <Col className="col">
               <UserProperties User={selectedUser}/>
              </Col>
              <Col className="col">
              <Logonscript User={selectedUser}/>
            </Col>
            </Row>
        </Container>
    );
    
};

export default EditUserPage;