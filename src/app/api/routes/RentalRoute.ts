import { Router } from 'express';
import { RentalController } from '../controllers';
import { RentalValidation } from '../validations';

const rentalRouter = Router();

const rentalValidation = new RentalValidation();
const rentalController = new RentalController();

rentalRouter.get('/', rentalController.getAll);
rentalRouter.get('/:id', rentalController.getById);
rentalRouter.post('/', rentalValidation.RentalCreateValidation, rentalController.create);
rentalRouter.put('/:id', rentalValidation.RentalUpdateValidation,rentalController.updateById);
rentalRouter.delete('/:id', rentalController.deleteById);

export default rentalRouter;