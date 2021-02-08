import React from 'react'
import { Col, Row,Form } from 'react-bootstrap';

function UserProperties() {
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
                    <input className="form-control" type="text" placeholder="Default input"/>   
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Nachname:
                    </Col>
                    <Col>
                    <input className="form-control" type="text" placeholder="Default input"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            LogonName:
                    </Col>
                    <Col>
                    <input className="form-control" type="text" placeholder="Default input"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            Beschreibung:
                    </Col>
                    <Col>
                    <input className="form-control" type="text" placeholder="Default input"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            CN:
                    </Col>
                    <Col>
                    <input className="form-control" type="text" placeholder="Default input"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            Mail:
                    </Col>
                    <Col>
                        <input className="form-control" type="email" placeholder="Default input"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                            UPN:
                    </Col>
                    <Col>
                        <input className="form-control" type="text" placeholder="Default input"/>
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