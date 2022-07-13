import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// function MASForm(props) {
//     const [formElements, setFormElements] = useState({
//         '1': { label: "Cholesterol level", min: 50, max: 600, variable: "Cholesterol", value: null, type: "range" },
//         '2': { label: "Diastolic level", min: 50, max: 400, variable: "Diastolic", value: null, type: "range" },
//         '3': { label: "Systolic level", min: 25, max: 200, variable: "Systolic", value: null, type: "range" },
//         '4': { label: "Cigarets/day", min: 0, max: 100, variable: "Smoking", value: null, type: "range" },
//         '5': { label: "Age At Start", min: 1, max: 150, variable: "AgeAtStart", value: null, type: "range" },
//         '6': { label: "Weight in lbs", min: 1, max: 500, variable: "Weight", value: null, type: "range" },
//         '7': { label: "Sex", options: ['F', 'M'], variable: "Sex", value: "F", type: "dropdown" }
//     });

//     const handleEvaluate = (event) => {
//         event.preventDefault();
//         for (let element in formElements) {
//             const data = formElements[element];
//             if (data.value === null) {
//                 setFormElements({ ...formElements, [element]: data.min })
//             }; 
//         }
//         props.onEvaluate(formElements);
//     };

//     const handleChange = (event, id) => {
//         const update = formElements[id];
//         update.value = parseInt(event.target.value);
//         setFormElements({ ...formElements, [id]: update })
//     };

//     const elements = [];
//     for (let element in formElements) {
//         const data = formElements[element];
//         switch (data.type) {
//             case "range":
//                 if (data.value === null) { data.value = data.min };
//                 elements.push(
//                     <Form.Group as={Row} key={element}>
//                         <Col sm="2" style={{ padding: 8 }}>
//                             <Form.Label>{data.label} :</Form.Label>
//                         </Col>
//                         <Col sm="2" style={{ padding: 12 }}>
//                             <Form.Control
//                                 type="range"
//                                 min={data.min}
//                                 max={data.max}
//                                 value={data.value}
//                                 onChange={e => handleChange(e, element)}
//                             />
//                         </Col>
//                         <Col sm="1">
//                             <Form.Control
//                                 type="input"
//                                 value={data.value}
//                                 onChange={e => handleChange(e, element)}
//                             />
//                         </Col>
//                     </Form.Group>
//                 );
//                 break;
//             case "dropdown":
//                 elements.push(
//                     <Form.Group as={Row} key={element}>
//                         <Col sm="2" style={{ padding: 8 }}>
//                             <Form.Label>{data.label} :</Form.Label>
//                         </Col>
//                         <Col sm="1" style={{ padding: 12 }}>
//                             <Form.Control
//                                 type="select"
//                                 as="select"
//                                 onChange={e => handleChange(e, element)}
//                                 >
//                                 {data.options.map((option) => <option key={option} value={option}>{option}</option>)}
//                             </Form.Control>
//                         </Col>
//                     </Form.Group>
//                 );
//                 break;
//             default:
//                     console.log('unknown form input type');
//                 break;
//         }
//         console.log(formElements);
//     };
    
//     return (
//         <Row>
//             <Col md={{ span: 12, offset: 1 }}>
//                 <h3>
//                     Please set the values for the different risk factors:
//                         </h3>
//                 <Form onSubmit={handleEvaluate} style={{ padding: 10 }} >
//                     {elements}
//                     <Form.Group as={Row}>
//                         <Col md={{ span: 12, offset: 2 }}>
//                             <Button
//                                 variant="primary"
//                                 type="submit">
//                                 Evaluate
//                             </Button>
//                         </Col>
//                     </Form.Group>
//                 </Form>
//             </Col>
//         </Row >

//     )
// }



function MASForm(props) {
    const [formElements, setFormElements] = useState({
        // '1': { label: "ID of customer", variable: "id", value: null, type: "number",step:0.001 },
        '1': { label: "Count of Premiums paid by customer that were 3 to 6 months late", min: 0, max: 10, variable: "Count_3-6_months_late", value: null, type: "range" },
        '2': { label: "Count of Premiums paid by customer that were 6 to 12 months late", min: 0, max: 10, variable: "Count_6-12_months_late", value: null, type: "range" },
        '3': { label: "Count of Premiums paid by customer that were more than 12 months late", min: 0, max: 10, variable: "Count_more_than_12_months_late", value: null, type: "range" },
        '4': { label: "Income of Customer",variable: "Income", value: null, type: "number" ,step:"any"},
        '5': { label: "Age of customer in days", variable: "age_in_days", value: null, type: "number",step:"any" },
        '6': { label: "Application underwriting score", variable: "application_underwriting_score", value: null, type: "number",step:"any" },
        '7': { label: "Number of premiums paid by customer", min: 0, max: 100, variable: "no_of_premiums_paid", value: null, type: "range" },
        '8': { label: "Percentage of premium paid by cash credit", variable: "perc_premium_paid_by_cash_credit", value: null , type: "number", min: "0.00",step:"0.001",max:"1.00", presicion:"2"  },
        '9': { label: "Premium paid ", variable: "premium", value: null, type: "number",step:"any" },
        '10': { label: "Residence area type", options: ['Urban', 'Rural'], variable: "residence_area_type", value: "Rural", type: "dropdown" },
        '11': { label: "Sourcing channel", options: ['A','B','C','D'], variable: "sourcing_channel", value: "A", type: "dropdown" }
    });

    const handleEvaluate = (event) => {
        event.preventDefault();
        for (let element in formElements) {
            const data = formElements[element];
            if (data.value === null) {
                setFormElements({ ...formElements, [element]: data.min })
            }; 
        }
        props.onEvaluate(formElements);
    };

    const handleChange = (event, id) => {
        const update = formElements[id];
        update.value = parseFloat(event.target.value);
        setFormElements({ ...formElements, [id]: update })
    };

    const elements = [];
    for (let element in formElements) {
        const data = formElements[element];
        switch (data.type) {
            case "range":
                if (data.value === null) { data.value = data.min };
                elements.push(
                    <Form.Group as={Row} key={element}>
                        <Col sm="3" style={{ padding: 8 }}>
                            <Form.Label>{data.label} :</Form.Label>
                        </Col>
                        <Col sm="2" style={{ padding: 12 }}>
                            <Form.Control
                                type="range"
                                min={data.min}
                                max={data.max}
                                value={data.value}
                                onChange={e => handleChange(e, element)}
                            />
                        </Col>
                        <Col sm="1">
                            <Form.Control
                                type="input"
                                value={data.value}
                                onChange={e => handleChange(e, element)}
                            />
                        </Col>
                    </Form.Group>
                );
                break;
            case "number":
                if (data.value === null) { data.value = 0 };
                // data.value=data.value.toFixed (2);
                // console.log(data.value)
                elements.push(
                     
                    <Form.Group as={Row} key={element}>
                        <Col sm="2" style={{ padding: 8 }}>
                            <Form.Label>{data.label} :</Form.Label>
                        </Col>
                        <Col sm="2" style={{ padding: 12 }}>
                            <Form.Control
                                type="number"
                                // min={data.min}
                                // max={data.max}
                                // step={0.01}
                                presicion={2} 
                                value={Number(data.value).toFixed(2)}
                                onChange={e => handleChange(e, element)}
                            />
                        </Col>
                        {/* <Col sm="1">
                            <Form.Control
                                type="input"
                                value={data.value}
                                onChange={e => handleChange(e, element)}
                            />
                        </Col> */}
                    </Form.Group>
                );
                break;
            case "dropdown":
                elements.push(
                    <Form.Group as={Row} key={element}>
                        <Col sm="2" style={{ padding: 8 }}>
                            <Form.Label>{data.label} :</Form.Label>
                        </Col>
                        <Col sm="1" style={{ padding: 12 }}>
                            <Form.Control
                                type="select"
                                as="select"
                                onChange={e => handleChange(e, element)}
                                >
                                {data.options.map((option) => <option key={option} value={option}>{option}</option>)}
                            </Form.Control>
                        </Col>
                    </Form.Group>
                );
                break;
            default:
                    console.log('unknown form input type');
                break;
        }
        console.log(formElements);
        
    };
    return (
        
        <Row>
            <Col md={{ span: 12, offset: 1 , }}>
                <br></br>
                <h3 style={{ padding: 0 }} >
                    Please set the values for the different factors to predict customer renewal rate:
                        </h3>
                <Form onSubmit={handleEvaluate} style={{ padding: 10 }} >
                    {elements}
                    
                    <Form.Group as={Row}>
                        <Col md={{ span: 12, offset: 2 }}>
                            <Button
                                variant="primary"
                                type="submit">
                                Evaluate
                            </Button>
                        </Col>
                    </Form.Group>
                    
                </Form>
            </Col>
        </Row >
    
    )
    
}

export default MASForm;