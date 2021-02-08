import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import UserSelection from '../UserSelection/UserSelection';
import AccountManagement from '../AccountManagement/AccountManagement';
import Logonscript from '../Logonscript/Logonscript';
import IUserResponsePayload from '../../api/IUserResponsePayload';



function AccountManagementPage() {

  const [selectedUser, setSelectedUser] = useState<IUserResponsePayload| undefined>(undefined);

  const handleUserChange = (selectedUser: IUserResponsePayload) => {
    setSelectedUser(selectedUser);
    if(selectedUser !==undefined)
    {
    console.log("Selected user is:" + selectedUser.email);
    }
  }

    return(
          <Container>
            <Row>
              <Col className="col-12">
                <UserSelection onUserChange={handleUserChange}/>
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