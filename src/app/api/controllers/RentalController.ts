import RentalService from '@/app/business/services/RentalService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class RentalController{
    public async getAll(req: Request, res: Response): Promise<void> {
        const rentalService = container.resolve(RentalService);

        const result = await rentalService.getAll();

        res.status(200).send(result);
    };

    public async getById(req: Request, res: Response): Promise<void> {
        const rentalService = container.resolve(RentalService);

        const result = await rentalService.getById(parseInt(req.params.id));

        res.status(200).send(result);
    };
};

export default RentalController;