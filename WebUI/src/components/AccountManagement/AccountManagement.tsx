import React from 'react'
import { Col, Row } from 'react-bootstrap';
import IUserResponsePayload from '../../api/IUserResponsePayload';

interface AccountManagementProps {
    User: IUserResponsePayload | undefined;
};

function AccountManagement(props: AccountManagementProps) {
    return (
        <div className="card">
            <div className="card-header">
                Kontoverwaltung
        </div>
            <div className="card-body">
                <Row>
                    <Col>
                        Loginname:
                </Col>
                    <Col>
                        {props.User?.email}
                </Col>
                </Row>
                <Row>
                    <Col>
                        Vorname:
                </Col>
                    <Col>
                        
                </Col>
                </Row>
                <Row>
                    <Col>
                        Nachname:
                </Col>
                    <Col>
                    {props.User?.username}
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
                        Value
                </Col>
                </Row>
                <div className="border-top my-3"></div>
                <p className="card-text">Letzete Anmeldung und falsche Passworteingabe: additional content.</p>
                <Row>
                    <Col>
                        letzte erfolgreiche Anmeldung:
                </Col>
                    <Col>
                        Value
                </Col>
                </Row>
                <Row>
                    <Col>
                        letzte falsche Passworteingabe:
                </Col>
                    <Col>
                        Value
                </Col>
                </Row>
                <div className="border-top my-3"></div>

                <a href="#" className="btn btn-primary">Unlock Account</a>
                <a href="#" className="btn btn-scondary">Enable Account</a>
                <a href="#" className="btn btn-scondary">Reset password</a>
            </div>
        </div>
    );

};

export default AccountManagement;