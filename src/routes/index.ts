// import { registerRouter } from "../controllers/register"

import { Router } from "express";
import { registerRouter } from "../controllers/register";
import { loginRoute } from "../controllers/login";

// export default (registerRouter);

// import { Router } from "express";
// import { register } from "../controllers/register";


// const router = Router();

// // @ts-ignore
// router.post('/register', register);

// export default router

const routes = Router();

[registerRouter,loginRoute].forEach(e => routes.use('/', e));

export default routes;

