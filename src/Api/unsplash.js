import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 0HuBKV7IwCBkGMJS5nY9xnCESGJnFhW4Y1h4Af0gf2E"
    }
})