import axios from 'axios'

export const fetchFish = async () => {
    return await axios.get("http://localhost:7878/fish")
}

export const fetchPromotion = async () => {
    return await axios.get("http://localhost:7878/promotion")
}
