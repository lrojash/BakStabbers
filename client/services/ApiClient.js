import axios from 'axios'

const ApiClient = axios.create({ baseURL: 'http://localhost:5001/api' })

export default ApiClient