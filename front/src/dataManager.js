import axios from 'axios';
import demoData from './demoData';

const instance = axios.create({
    baseURL: 'http://localhost:8081/api/'
})

export default {
    getAllEpcs() {
        return instance.get('Epc/GetAll').then(response => {
            response.data;
        });
    },

    getEpcById(id) {
        return instance.get('Epc/GetById/' + id).then(response => {
            response.data;
        });
    },

    getByEpc(epc) {
        return instance.get('Epc/GetByEpc/' + epc).then(response => {
            response.data;
        });
    },

    getAllItems() {
        return instance.get('Item/GetAll').then(response => {
            response.data;
        });
    },

    getItemById(id) {
        return instance.get('Item/GetById/' + id).then(response => {
            response.data;
        });
    },

    getItemByEpc(epc) {
        return instance.get('Item/GetByEpc/' + epc).then(response => {
            response.data;
        });
    },

    getAllStalls() {
        return demoData.stalls;
    }
}
