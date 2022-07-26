import RentalService from '@/app/business/services/RentalService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class RentalController{
    public async getAll(req: Request, res: Response): Promise<void> {
        const rentalService = container.resolve(RentalService);

        const query = {
            size: req.query.size,
            page: req.query.page,
            sort: req.query.sort,
            order: req.query.order,
            filterField: req.query.filterField,
            filterValue: req.query.filterValue
        };

        //const attributes = ['rental_id', 'customer_id'];

        const queryAtt = Object.values(query).map((x) => x as string);

        const result = await rentalService.getAll(queryAtt);

        res.status(200).send(result);
    };

    public async getById(req: Request, res: Response): Promise<void> {
        const rentalService = container.resolve(RentalService);

        const result = await rentalService.getById(parseInt(req.params.id));

        res.status(200).send(result);
    };

    public async create(req: Request, res: Response): Promise<void> {
        const rentalService = container.resolve(RentalService);

        const result = await rentalService.create(req.body);

        res.status(201).send(result);
    };

    public async updateById(req: Request, res: Response): Promise<void> {
        const rentalService = container.resolve(RentalService);

        const result = await rentalService.updateById(parseInt(req.params.id), req.body);

        res.status(200).send(result);
    };

    public async deleteById(req: Request, res: Response): Promise<void> {
        const rentalService = container.resolve(RentalService);

        const result = await rentalService.deleteById(parseInt(req.params.id));

        res.status(200).send(result);
    };
};

export default RentalController;