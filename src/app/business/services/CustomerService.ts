import ICustomerRepository from '@/app/database/repositories/ICustomerRepository';
import { CustomerInput, CustomerOutput } from '@/shared/types/interfaces/Customer';
import { Model } from 'sequelize-typescript'
import { inject, injectable } from 'tsyringe';

@injectable()
class CustomerService{
    constructor(
        @inject('CustomerRepository')
        private readonly customerRepository: ICustomerRepository
    ){};

    public async getAll(attributes?: string[]): Promise<CustomerOutput[]>{
        return await this.customerRepository.getAll(attributes);
    };

    public async getById(id: number): Promise<CustomerOutput|unknown>{
        try{
            return await this.customerRepository.getById(id);
        }catch(error){
            return error;
        };
    };

    public async create(data: CustomerInput): Promise<Model> {
        return await this.customerRepository.create(data);
    };

    public async updateById(id: number, data: CustomerInput): Promise<CustomerOutput|unknown> {
        try{
            return await this.customerRepository.updateById(id, data);
        }catch(error){
            return error;
        };
    };

    public async deleteById(id: number): Promise<boolean|unknown> {
        try{
            return await this.customerRepository.deleteById(id);
        }catch(error){
            return error;
        };
    };
};

export default CustomerService;