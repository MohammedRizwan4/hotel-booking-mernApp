import Users from "../models/Users.js"
import bcrypt from 'bcrypt';
import { createError } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new Users({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        const user = await newUser.save();
        res.status(201).json({ msg: "User has been created", user })
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {

        const user = await Users.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) return next(createError(400, "Wrong Password and username"))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "Mohammedrizwanmohammedrizwan")

        const { password, isAdmin, ...others } = user._doc;

        res.cookie("access-token", token, {
            httpOnly: true
        }).status(200).json({ others })
    } catch (error) {
        next(error)
    }
}
