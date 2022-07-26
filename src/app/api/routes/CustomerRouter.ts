import { Router } from 'express';
import  CustomerController from '../controllers/CustomerController';
import { CustomerValidation } from '../validations';

const customerRouter = Router();

const customerValidation = new CustomerValidation();
const customerController = new CustomerController();

customerRouter.get('/', customerController.getAll);
customerRouter.get('/:id', customerController.getById);
customerRouter.post('/', customerValidation.CustomerCreateValidation, customerController.create);
customerRouter.put('/:id', customerValidation.CustomerUpdateValidation,customerController.updateById);
customerRouter.delete('/:id', customerController.deleteById);

export default customerRouter;