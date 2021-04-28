import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-app-react-48057-default-rtdb.europe-west1.firebasedatabase.app/'
})

export default instance;