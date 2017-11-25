import axios from 'axios';
import demoData from './demoData';

var isDev = true;
const instance = axios.create({
    baseURL: isDev ? 'http://localhost:8081/api/' : 'http://13.74.147.213/api/'
})

const inputScale = 1/2.0;

function transformEpc(epc) {
    epc.xlocation = (epc.xlocation * inputScale) + (demoData.dimensions.width / 2.0) - 150;
    epc.ylocation = (epc.ylocation * inputScale) + (demoData.dimensions.height / 2.0) - 100;
}

export default {

    getByEpc(epc, amount) {
        return instance.get('Epc/GetByEpc/' + epc + '/' + amount).then(response => {
            response.data.forEach(transformEpc);
            return response.data;
        });
    },

    getAllItems() {
        return instance.get('Item/GetAll').then(response => {
            response.data.forEach(transformEpc);
            return response.data;
        });
    },

    /*getAllEpcs() {
        return instance.get('Epc/GetAll').then(response => {
           return response.data.forEach(transformEpc);
        });
    },

    getEpcById(id) {
        return instance.get('Epc/GetById/' + id).then(response => {            
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
    },*/

    getAllStalls() {
        return demoData.stalls;
    }
}
