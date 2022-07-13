import React from 'react';
import { useEffect, useState, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import Instance from '../apis/Instance';



import { AuthContext } from '../contexts';



import Container from 'react-bootstrap/Container';



import TableViewer from '../components/TableViewer/TableViewer';



function CAS() {

    const { authInfo, setAuthInfo } = useContext(AuthContext);

    const [tableData, setTableData] = useState({ rows: [], columns: [] });

    const history = useHistory();



    useEffect(() => {

        if (authInfo.authenticated === false) {

            history.push("/logon");

        }

    }, [authInfo.authenticated, history]);



    useEffect(() => {

        if (authInfo.authenticated === true && !("cas" in authInfo.session)) {

            const endpoint = '/cas-shared-default-http/cas/sessions';

            Instance.post(endpoint)

                .then(response => {

                    setAuthInfo({ ...authInfo, session: { ...authInfo.session, cas: response.data.session } });

                })

        }

    }, [authInfo, setAuthInfo]);



    useEffect(() => {

        if (authInfo.session.cas !== "") {

            const endpoint = `/cas-shared-default-http/cas/sessions/${authInfo.session.cas}/actions/table.fetch`;

            const data = {

                "table": {

                    "caslib": "PUBLIC",

                    "name": "UpdatesRenewal"

                }

            }

            const headers = {

                "accept": "application/json",

                "content-type": "application/json"

            };

            Instance.post(endpoint, data, { headers: headers })

                .then(response => {

                    if (response.data.results.Fetch.schema.length > 0) {

                        const result = response.data.results.Fetch;

                        console.log(result.schema)

                        setTableData({ rows: result.rows, columns: result.schema });

                    }

                });

        }

    }, [authInfo.session]);




    return (

        <Container className="justify-content-md-center">

            <br></br>

            <TableViewer data={tableData} />

        </Container>

    )

};



export default CAS;
