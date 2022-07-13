import axios from 'axios';

const Instance = axios.create({
    baseURL: "http://sasserver.demo.sas.com",
    headers:{}
});

export default Instance;