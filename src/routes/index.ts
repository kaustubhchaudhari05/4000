// import { registerRouter } from "../controllers/register"

// export default (registerRouter);

import { Router } from "express";
import { register } from "../controllers/register";


const router = Router();

// @ts-ignore
router.post('/register', register);

export default router

