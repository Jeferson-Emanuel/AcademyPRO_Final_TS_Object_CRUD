import {AddressInput, AddressOutput } from '@/shared/types/interfaces/Address'
import IBaseRepository from './IBaseRepository';
import Address from "../models/AddressModel";

interface IAddressRepository extends IBaseRepository<AddressInput, AddressOutput> {
    getAll(attributes?: string[]): Promise<AddressOutput[]>;

    getById(id: number, attributes?: string[]): Promise<AddressOutput>;

    create(data: AddressInput): Promise<Address>;

    updateById(id: number, data: AddressInput): Promise<AddressOutput>;

    deleteById(id: number): Promise<boolean>;
}

export default IAddressRepository;