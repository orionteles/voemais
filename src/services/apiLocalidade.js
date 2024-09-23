const { default: axios } = require("axios");

const apiLocalidade = axios.create({
    baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades'
})

export default apiLocalidade