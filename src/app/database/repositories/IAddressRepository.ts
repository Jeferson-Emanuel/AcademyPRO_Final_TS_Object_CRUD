import {AddressInput, AddressOutput } from '@/shared/types/interfaces/Address'
import IBaseRepository from './IBaseRepository';
import Address from "../models/AddressModel";

interface IAddressRepository extends IBaseRepository<AddressInput, AddressOutput> {
   
}

export default IAddressRepository;