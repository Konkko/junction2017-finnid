import axios from 'axios';
import demoData from 'demoData';

const instance = axios.create({
    baseURL: 'http://localhost:8081/api/'
})

export default {
    getAllEpcs() {
        return instance.get('Epc/GetAll').then(response => {
            response.json();
        });
    },

    getEpcById(id) {
        return instance.get('Epc/GetById/' + id).then(response => {
            response.json();
        });
    },

    getByEpc(epc) {
        return instance.get('Epc/GetByEpc/' + epc).then(response => {
            response.json();
        });
    },

    getAllItems() {
        return instance.get('Item/GetAll').then(response => {
            response.json()
        });
    },

    getItemById(id) {
        return instance.get('Item/GetById/' + id).then(response => {
            response.json();
        });
    },

    getItemByEpc(epc) {
        return instance.get('Item/GetByEpc/' + epc).then(response => {
            response.json();
        });
    }

    getAllStalls() {
        return demoData.stalls;
    }
}
