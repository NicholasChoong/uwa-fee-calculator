// We import express for use
import express from 'express'
import compress from 'compression'
import helmet from 'helmet'
// Allows Cross-origin resource sharing
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

// Looking for a local port to host our web application
const port = parseInt(process.env.PORT || '4000', 10)
const host = process.env.HOST || 'localhost'

// We initialize our express app
const app = express()

// Enable security, CORS, compression, and body parsing
app.use(helmet())
app.use(cors())
app.use(compress())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('host', host)
app.set('port', port)

export default app
