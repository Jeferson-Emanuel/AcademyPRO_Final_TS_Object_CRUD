// import Customer from "../../models/CustomerModel";
import { Customer } from "@/app/database/models"
import { CustomerInput, CustomerOutput } from '@/shared/types/interfaces/Customer';
import ICustomerRepository from "../ICustomerRepository";
import BaseRepository from "./BaseRepository";
import { OrderItem } from 'sequelize/types';


class CustomerRepository extends BaseRepository<CustomerInput, CustomerOutput>
    implements ICustomerRepository
{
    constructor() {
        super(Customer)
    }

    public async getAll(attributes?: string[]): Promise<CustomerOutput[]> {
        let size, page, sort, order;
        if(attributes){
            [size, page, sort, order] = attributes;
        }
        (size)? size=parseInt(size) : size=5;
        (page)? page=parseInt(page) : page=0;
        (sort)? sort=sort : sort=Customer.primaryKeyAttribute as string;
        (order)? order=order : order='ASC'
       
        // @ts-ignore
        return this.model.findAndCountAll({
            //attributes,
            limit: size,
            offset: page*size,
            order: [[sort, order] as OrderItem]
        });
    };
 };



    

export default CustomerRepository;
