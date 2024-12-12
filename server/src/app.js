import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'

const app = express()

// GLOBAL MIDDLEWARES

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
})
);
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: '16kb' }))
app.use(cookieParser())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// ROUTE IMPORTS

import userRouter from "./routes/user.route.js"
import { errorHandler } from './middlewares/error.middleware.js'

// API ROUTES

app.use("/api/v1/users", userRouter);


app.use(errorHandler)

export { app }