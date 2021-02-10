import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import UserSelection from '../UserSelection';
import AccountManagement from '../AccountManagement';
import Logonscript from '../Logonscript';
import IUserResponsePayload from '../../api/IUserResponsePayload';

interface AccountManagementPageProps {
  users: IUserResponsePayload[];
}

function AccountManagementPage(props:AccountManagementPageProps) {

  const [selectedUser, setSelectedUser] = useState<IUserResponsePayload| undefined>(undefined);

  const handleUserChange = (selectedUser: IUserResponsePayload) => {
    setSelectedUser(selectedUser);
  }

    return(
          <Container>
            <Row>
              <Col className="col-12">
                <UserSelection onUserChange={handleUserChange} selectableUsers={props.users}/>
              </Col>
              <Col className="col">
                <AccountManagement User={selectedUser}/>
              </Col>
              <Col className="col">
              <Logonscript User={selectedUser}/>
            </Col>
            </Row>
        </Container>
    );
    
};

export default AccountManagementPage;