import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MASResults1(props) {
    const details = [];
    for (let key in props.data) {
        details.push(<li key={key}>{key} : {props.data[key]}</li>)
    }

    return (
        <Row>
            <Col md={{ span: 12, offset: 1 }}>
                <details>
                    <summary>
                        props.data[""]
                        The customer has {(props.data["P_fraud_reportedY"] * 100).toFixed(2)}% chance of commiting an auto insurance fraud.
                    </summary>
                    <ul>
                        {details}
                    </ul>
                </details>
            </Col>
        </Row>
    );
}

export default MASResults1;