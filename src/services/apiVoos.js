const { default: axios } = require("axios");

const apiVoos = axios.create({
    baseURL: 'http://localhost:3333/'
})

export default apiVoos