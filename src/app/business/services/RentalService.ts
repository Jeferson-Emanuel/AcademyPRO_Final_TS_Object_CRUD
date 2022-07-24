import IRentalRepository from '@/app/database/repositories/IRentalRepository';
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
};

export default RentalService;