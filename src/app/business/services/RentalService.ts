import IRentalRepository from '@/app/database/repositories/IRentalRepository';
import { RentalInput, RentalOutput } from '@/shared/types/interfaces/Rental';
import { Model } from 'sequelize-typescript';
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

    public async getById(id: number): Promise<RentalOutput|unknown>{
        try{
            return await this.rentalRepository.getById(id);
        }catch(error){
            return error;
        };        
    };

    public async create(data: RentalInput): Promise<Model> {
        return await this.rentalRepository.create(data);
    };

    public async updateById(id: number, data: RentalInput): Promise<RentalOutput|unknown> {
        try{
            return await this.rentalRepository.updateById(id, data);
        }catch(error){
            return error;
        };
    };

    public async deleteById(id: number): Promise<boolean|unknown> {
        try{
            return await this.rentalRepository.deleteById(id);
        }catch(error){
            return error;
        };
    };
};

export default RentalService;