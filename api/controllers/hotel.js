import Hotels from "../models/Hotels.js"

export const createHotel = async (req,res,next) => {
    const newHotel = new Hotels(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(201).json(savedHotel)
    } catch (error) {
        next(error)
    }
}

export const updateHotel = async (req,res,next) => {
    try {
        const updatedHotel = await Hotels.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel)
    } catch (error) {
        next(error)
    }
}

export const deleteHotel = async (req,res,next) => {
    try {
        await Hotels.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted successfully")
    } catch (error) {
        next(error)
    }
}

export const getHotel = async (req,res,next) => {
    try {
        const hotel = await Hotels.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}

export const getAllHotel = async (req,res,next) => {
    try {
        console.log("Hi i am a hotel route");
        const hotels = await Hotels.find()
        res.status(200).json(hotels)
    } catch (error) {
        next(error)
    }
}