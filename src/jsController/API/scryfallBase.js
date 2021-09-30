import axios from 'axios';
import {environment} from '../config/app-config';

export default axios.create({
    baseURL: environment.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})