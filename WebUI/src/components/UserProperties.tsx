import React from 'react'
import { Col, Row,Form } from 'react-bootstrap';
import IUserResponsePayload from '../api/IUserResponsePayload';

interface UserPropertiesProps {
    User: IUserResponsePayload | undefined;
};

function UserProperties(props:UserPropertiesProps) {
    return (
        <div className="card">
            <div className="card-header">
                Eigenschaften
        </div>
            <div className="card-body">
                <Form>
                <Row>
                    <Col>
                        Vorname:
                    </Col>
                    <Col>
                    <input className="form-control" type="text" defaultValue={props.User !== undefined ? props.User.username : ""}/>   
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Nachname:
                    </Col>
                    <Col>
                    <input className="form-control" type="text" defaultValue={props.User !== undefined ? props.User.name : ""}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            LogonName:
                    </Col>
                    <Col>
                    <input className="form-control" type="text" defaultValue={props.User !== undefined ? props.User.username : ""}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            Beschreibung:
                    </Col>
                    <Col>
                    <input className="form-control" type="text"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            CN:
                    </Col>
                    <Col>
                    <input className="form-control" type="text"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            Mail:
                    </Col>
                    <Col>
                        <input className="form-control" type="email" defaultValue={props.User !== undefined ? props.User.email : ""}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            UPN:
                    </Col>
                    <Col>
                        <input className="form-control" type="text" defaultValue={props.User !== undefined ? props.User.username : ""}/>
                    </Col>
                </Row>
                </Form>

                <div className="border-top my-3"></div>

                <a href="#" className="btn btn-primary">Eigenschaften ändern</a>
            </div>
        </div>
    );

};

export default UserProperties;