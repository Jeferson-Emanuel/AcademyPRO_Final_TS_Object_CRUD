import {CustomerInput, CustomerOutput } from '@/shared/types/interfaces/Customer'
import IBaseRepository from './IBaseRepository';
import Customer from "../models/CustomerModel";

interface ICustomerRepository extends IBaseRepository<CustomerInput, CustomerOutput> {

}

export default ICustomerRepository;