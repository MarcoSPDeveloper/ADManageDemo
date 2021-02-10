import React, { useState } from 'react'
import { Col, Row,Form } from 'react-bootstrap';
import IUserResponsePayload from '../api/IUserResponsePayload';

interface DeleteProps {
    User: IUserResponsePayload | undefined;
};

function Delete(props:DeleteProps) {

    const [userDeleted, setUserDeleted] = useState<boolean>(false);
    const [userDeleteMessage, setUserDeleteMessage] = useState<string>("");


    //
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {

    //const handleClick = (event: any) => {
        setUserDeleted(true);
        setUserDeleteMessage("Not possible to delete this user, this is only a demo application");
      }

    return (
        <div className="card">
            <div className="card-header">
                Benutzer löschen
        </div>
            <div className="card-body">
                <Form>
                <Row>
                    <Col>
                        LogonName:
                    </Col>
                    <Col>
                        {props.User?.email}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Displayname:
                    </Col>
                    <Col>
                        {props.User?.name}
                    </Col>
                </Row>
                <Row>
                    <Col>
                            Beschreibung:
                    </Col>
                    <Col>
                   
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <textarea className="form-control" aria-label="With textarea" value={userDeleteMessage}>
                        
                    </textarea>
                    </Col>
                </Row>
                </Form>

                <div className="border-top my-3"></div>

                <button className="btn btn-primary" 
                onClick={e=> handleClick(e)}
                disabled={props.User == undefined || userDeleted ==true ? true: false} >Löschen</button>
            </div>
        </div>
    );

};

export default Delete;