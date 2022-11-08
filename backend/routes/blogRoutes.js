import express from 'express';
import {authUser, authAdmin} from '../middleware/authMiddleware.js'
import {createBlog, getBlogs, getBlogsByUserId, getBlogById, deleteBlogById} from '../controller/blogController.js'

const router = express.Router()

router.route('/').post(authUser, createBlog).get(authUser, getBlogs)
router.get('/:userId/all', authUser, getBlogsByUserId)
router.route('/:id').get(authUser, getBlogById).delete(authUser, deleteBlogById)

export default router