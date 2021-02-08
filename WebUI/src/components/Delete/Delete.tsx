import React from 'react'
import { Col, Row,Form } from 'react-bootstrap';

function Delete() {
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
                    <textarea className="form-control" aria-label="With textarea" defaultValue="Deleting">
                        
                    </textarea>
                    </Col>
                </Row>
                </Form>

                <div className="border-top my-3"></div>

                <a href="#" className="btn btn-primary">Löschen</a>
            </div>
        </div>
    );

};

export default Delete;