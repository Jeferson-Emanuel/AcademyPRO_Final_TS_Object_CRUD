import {CustomerInput, CustomerOutput } from '@/shared/types/interfaces/Customer'
import IBaseRepository from './IBaseRepository';
import Customer from "../models/CustomerModel";

interface ICustomerRepository extends IBaseRepository<CustomerInput, CustomerOutput> {
    getAll(attributes?: string[]): Promise<CustomerOutput[]>;

    getById(id: number, attributes?: string[]): Promise<CustomerOutput>;

    create(data: CustomerInput): Promise<Customer>;

    updateById(id: number, data: CustomerInput): Promise<CustomerOutput>;

    deleteById(id: number): Promise<boolean>;
}

export default ICustomerRepository;