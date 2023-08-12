import axios from "./instance.request.js"
import Config from "../../app-config.js"

export const logInRequest = async (data) => await axios.post(`${Config.API_BASE_URL}/auth`, data)

export const validateJWT = async () => await axios.get(`${Config.API_BASE_URL}/auth`)