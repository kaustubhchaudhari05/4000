import { Request, Response, Router } from "express";
import User from "../models/User";
import bcrypt, { compare } from 'bcryptjs';

const router = Router();

// @ts-ignore
router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(email, password, "***");
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
        return res.status(404).json({ message: 'Login not defined' });
    }

    // @ts-ignore
    const matched = await bcrypt.compare(password, existingUser.password);

    if (!matched) {
        return res.status(400).json({ message: 'Incorrect password!!' });
    }

    const userDetails = {
        userId: existingUser?.userId,
        name: existingUser?.name,
        email: existingUser?.email
    }

    return res.status(200).json({ message: "Login successful!!", data: userDetails })
})

export { router as loginRoute };