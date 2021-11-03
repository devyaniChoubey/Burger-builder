import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://burger-builder-6ee3d-default-rtdb.asia-southeast1.firebasedatabase.app/'
})

export default instance;