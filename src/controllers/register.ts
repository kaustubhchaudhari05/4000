import express, { Request, Response, Router } from "express";
import bcrypt from "bcryptjs";
import User from "../models/User";

// export const register = async (req: Request, res: Response) => {
//   const { name, email, password }: any = req.body;
// };

const router = Router();

router.post("/register",
	// @ts-ignore
	async (req: Request, res: Response) => {
		try {
			const { name, email, password } = req.body;



			const existingUser = await User.findOne({ email });

			if (existingUser) {
				return res.status(400).json({ message: "User already exist" });
			}

			// let userId : any = 0;
			// const lastUser = await User.find({ _id: -1 });
			const lastUser = await User.findOne().sort({ _id: -1 }).exec();
			// if (!lastUser) {
			// 	userId = 1
			// } else {

			// }
			console.log({ lastUser });
			// @ts-ignore
			const userId = !lastUser ? 1 : (lastUser?.userId + 1)



			const hashedPassword = await bcrypt.hash(password, 10);
			const user = new User({ userId, name, email, password: hashedPassword });

			await user.save();
			res.status(201).json({ message: "User registered successfully" });
		} catch (err) {
			console.log("error: ", err);
		}
	});

export { router as registerRouter };

// import { Request, Response } from "express";
// import User from "../models/User";
// import bcrypt from "bcryptjs";

// export const register = async (req: Request, res: Response) => {
//   console.log(req.body, "(((");
//   const { name, email, password } = req.body;

//   try {
//     const exists = await User.findOne({ email });
//     if (exists) return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ name, email, password: hashedPassword });

//     await user.save();
//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };
