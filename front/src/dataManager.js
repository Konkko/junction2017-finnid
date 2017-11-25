import axios from 'axios';
import demoData from './demoData';

const instance = axios.create({
    baseURL: 'http://localhost:8081/api/'
})

export default {
    getAllEpcs() {
        return instance.get('Epc/GetAll').then(response => {
           return  response.data;
        });
    },

    getEpcById(id) {
        return instance.get('Epc/GetById/' + id).then(response => {
            return response.data;
        });
    },

    getByEpc(epc) {
        return instance.get('Epc/GetByEpc/' + epc).then(response => {
            return response.data;
        });
    },

    getAllItems() {
        return instance.get('Item/GetAll').then(response => {
            return response.data;
        });
    },

    getItemById(id) {
        return instance.get('Item/GetById/' + id).then(response => {
            return response.data;
        });
    },

    getItemByEpc(epc) {
        return instance.get('Item/GetByEpc/' + epc).then(response => {
            return response.data;
        });
    },

    getAllStalls() {
        return demoData.stalls;
    }
}
