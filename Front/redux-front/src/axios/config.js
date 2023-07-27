import axios from "axios";

const blogFetch = axios.create({
    baseURL: "http://localhost:3000/omdb",
    headers: {'Access-Control-Allow-Origin': 'http://localhost:5173' },
});

export default blogFetch; 
