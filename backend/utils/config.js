import dotenv from 'dotenv'
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT
const BASE_API = 'api'
export default {
  MONGODB_URI,
  PORT,
  BASE_API,
}