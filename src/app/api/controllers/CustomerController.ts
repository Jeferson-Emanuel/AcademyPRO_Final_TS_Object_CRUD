import CustomerService from '@/app/business/services/CustomerService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

class CustomerController{
    public async getAll(req: Request, res: Response): Promise<void> {
        const customerService = container.resolve(CustomerService);

        const query = {
            size: req.query.size,
            page: req.query.page,
            sort:req.query.sort,
            order: req.query.order
        };

        const attributes = Object.values(query).map((x) => x as string);

        const result = await customerService.getAll(attributes);

        res.status(200).send(result);
    };

    public async getById(req: Request, res: Response): Promise<void> {
        const customerService = container.resolve(CustomerService);

        const result = await customerService.getById(parseInt(req.params.id));

        res.status(200).send(result);
    };

    public async create(req: Request, res: Response): Promise<void> {
        const customerService = container.resolve(CustomerService);

        const result = await customerService.create(req.body);

        res.status(201).send(result);
    };

    public async updateById(req: Request, res: Response): Promise<void> {
        const customerService = container.resolve(CustomerService);

        const result = await customerService.updateById(parseInt(req.params.id), req.body);

        res.status(200).send(result);
    };

    public async deleteById(req: Request, res: Response): Promise<void> {
        const customerService = container.resolve(CustomerService);

        const result = await customerService.deleteById(parseInt(req.params.id));

        res.status(200).send(result);
    };
};

export default CustomerController;