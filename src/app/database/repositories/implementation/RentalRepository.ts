import { RentalInput, RentalOutput } from '@/shared/types/interfaces/Rental';
import { OrderItem } from 'sequelize/types';
import { BaseRepository } from '.';
import Rental from '../../models/RentalModel';
import IRentalRepository from '../IRentalRepository';

class RentalRepository extends BaseRepository<RentalInput, RentalOutput> implements IRentalRepository{
    constructor(){
        super(Rental);
    };

    public async getAll(attributes?: string[]): Promise<RentalOutput[]> {
        let size, page, sort, order;
        if(attributes){
            [size, page, sort, order] = attributes;
        }
        (size)? size=parseInt(size) : size=5;
        (page)? page=parseInt(page) : page=0;
        (sort)? sort=sort : sort=Rental.primaryKeyAttribute as string;
        (order)? order=order : order='ASC'
        //console.log(size, page, sort, order);
        // @ts-ignore
        return this.model.findAndCountAll({
            //attributes,
            limit: size,
            offset: page*size,
            order: [[sort, order] as OrderItem]
        });
    };
};

export default RentalRepository;