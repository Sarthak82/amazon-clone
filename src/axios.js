// way to make a request (post, get)
import axios from "axios";

const instance = axios.create({
    baseURL:'https://us-central1-clone-a6ed3.cloudfunctions.net/api'
    //  'http://127.0.0.1:5001/clone-a6ed3/us-central1/api' // API URL(Cloud Function)
})

export default instance