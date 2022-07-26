import { Router } from "express";
import authRouter from "./AuthRoute";
import customerRouter from "./CustomerRouter";


const router = Router();

router.use('/auth', authRouter);

router.use('/customer', customerRouter);

export default router;