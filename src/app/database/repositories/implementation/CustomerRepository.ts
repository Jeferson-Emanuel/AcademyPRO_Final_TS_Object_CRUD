import Customer from "../../models/CustomerModel";
import { CustomerInput, CustomerOutput } from '@/shared/types/interfaces/Customer';
import ICustomerRepository from "../ICustomerRepository";
import BaseRepository from "./BaseRepository";


class CustomerRepository extends BaseRepository<CustomerInput, CustomerOutput>
    implements ICustomerRepository
{
    constructor() {
        super(Customer)
    }
}
    

export default CustomerRepository;
