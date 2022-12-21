import axios from 'axios'

interface AxiosOptions {
    baseUrl?: string
    token?: string
}


const http = (options: AxiosOptions ) => axios.create({
        baseURL: options.baseUrl,
        headers: {
            Authorization: options.token ? `Bearer ${options.token}` : '',
            common: {
                'Content-Type': 'application/json'
            }
        }
    })

export default http;