import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8081/api/'
})

export default {
    getAll() {
        return instance.get('Epc/GetAll').then(response => {
            console.log(response);
        });
    },
}
