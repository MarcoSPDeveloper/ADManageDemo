import React, { useState }from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, NavItem } from 'react-bootstrap';
import UserSelection from '../UserSelection';
import Copy from '../Copy';
import IUserResponsePayload from '../../api/IUserResponsePayload';

interface CopyUserPageProps {
  users: IUserResponsePayload[];
}

function CopyUserPage(props:CopyUserPageProps) {


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
               <Copy/>
              </Col>
            </Row>
        </Container>
    );
    
};

export default CopyUserPage;