import axios from 'axios';

export default {
    getAll() {
        return axios.get('http://localhost:8081/api/Epc/GetAll')
        .then(response => {
            console.log(response);
        });
    },

    getA() {
        return axios.get('http://localhost:8081/api/Epc/GetAll')
        .then(response => {
            console.log(response);
        });
    }
}
