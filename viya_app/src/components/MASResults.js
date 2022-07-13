import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MASResults(props) {
    const details = [];
    for (let key in props.data) {
        details.push(<li key={key}>{key} : {props.data[key]}</li>)
    }
    console.log(props.data);

    return (
        <Row>
            <Col md={{ span: 12, offset: 1 }}>
                <details>
                    <summary>
                    The customer has {(props.data["P_renewal0"] * 100).toFixed(2)}% chance of renewing his auto insurance.
                    </summary>
                    <ul>
                        {details}
                    </ul>
                </details>
            </Col>
        </Row>
    );
}

export default MASResults;