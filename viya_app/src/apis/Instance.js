import axios from 'axios';

const Instance = axios.create({
    baseURL: "https://sasserver.demo.sas.com",
    headers:{}
});

export default Instance;