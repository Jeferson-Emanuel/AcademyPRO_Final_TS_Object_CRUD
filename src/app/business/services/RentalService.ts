import IRentalRepository from '@/app/database/repositories/IRentalRepository';
import { ResourceNotFoundError } from '@/shared/errors';
import { RentalOutput } from '@/shared/types/interfaces/Rental';
import { inject, injectable } from 'tsyringe';

@injectable()
class RentalService{
    constructor(
        @inject('RentalRepository')
        private readonly rentalRepository: IRentalRepository
    ){};

    public async getAll(): Promise<RentalOutput[]>{
        return await this.rentalRepository.getAll();
    };

    public async getById(id: number): Promise<RentalOutput|ResourceNotFoundError>{
        try {
            return await this.rentalRepository.getById(id);
        } catch (error) {
            return new ResourceNotFoundError;
        };        
    };
};

export default RentalService;