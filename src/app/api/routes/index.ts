import { Router } from "express";
import authRouter from "./AuthRoute";
import rentalRouter from './RentalRoute';

const router = Router();

router.use('/auth', authRouter);

//Autorização entra aqui

router.use('/rental', rentalRouter);

export default router;