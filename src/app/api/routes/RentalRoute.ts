import { Router } from 'express';
import { RentalController } from '../controllers';

const rentalRouter = Router();

const rentalController = new RentalController();

rentalRouter.get('/', rentalController.getAll);
rentalRouter.get('/:id', rentalController.getById);
rentalRouter.post('/', rentalController.create);
rentalRouter.put('/:id', rentalController.updateById);
//rentalRouter.delete('/:id', rentalController.deleteById);

export default rentalRouter;