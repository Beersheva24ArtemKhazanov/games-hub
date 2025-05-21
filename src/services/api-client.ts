import axios from 'axios';
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "3faa5df24af04d979fc13b12daea6c20"
    }
})