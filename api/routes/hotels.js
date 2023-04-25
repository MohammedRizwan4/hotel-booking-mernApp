import express from 'express'
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotel.js'
import Hotels from '../models/Hotels.js'
import { createError } from '../utils/error.js'
const router = express.Router()

router.post('/', createHotel)
router.put('/:id', updateHotel)
router.delete('/:id', deleteHotel)
router.get('/:id', getHotel)
router.get('/', getAllHotel)

export default router;

