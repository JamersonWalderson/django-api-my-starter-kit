import axios from "axios";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST,
    headers: {
        'Content-type': 'application/json',
    },
})

export default API;