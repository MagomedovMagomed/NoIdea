import express from "express"

const router = express.Router()

export default router 


import { addPost } from '../controllers/post.js'
router.get("/", addPost)