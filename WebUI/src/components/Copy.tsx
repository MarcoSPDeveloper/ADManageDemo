import React from 'react'
import { Col, Row,Form } from 'react-bootstrap';

function Copy() {
    return (
        <div className="card">
            <div className="card-header">
                Benutzerdaten kopieren
        </div>
            <div className="card-body">
                <Form>
                <Row>
                    <Col>
                        LogonName:
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Displayname:
                    </Col>
                    <Col>
                    
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
                    <textarea className="form-control" aria-label="With textarea">
                        
                    </textarea>
                    </Col>
                </Row>
                </Form>

                <div className="border-top my-3"></div>

                <a href="#" className="btn btn-primary">Benutzerdaten kopieren</a>
                <a href="#" className="btn btn-secondary">Zurücksetzen</a>
            </div>
        </div>
    );

};

export default Copy;