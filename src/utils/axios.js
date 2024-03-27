import axios from "axios";

const init =  axios.create({
    baseURL: "http://127.0.0.1:8040/api/v1"

})

export default init;