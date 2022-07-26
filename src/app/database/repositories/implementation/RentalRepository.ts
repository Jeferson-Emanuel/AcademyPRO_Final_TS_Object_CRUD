import { RentalInput, RentalOutput } from '@/shared/types/interfaces/Rental';
import QueryFilter from '@/shared/utils/QueryFilter';
import { BaseRepository } from '.';
import { Customer, Staff } from '../../models';
import Rental from '../../models/RentalModel';
import IRentalRepository from '../IRentalRepository';

// interface whereValuesInterface {[index: string]: number|string};

class RentalRepository extends BaseRepository<RentalInput, RentalOutput> implements IRentalRepository{
    constructor(){
        super(Rental);
    };

    public async getAll(queryAtt: string[], attributes?: string[]): Promise<RentalOutput[]> {
        const queryBuilder = new QueryFilter();
        const filters = queryBuilder.buildFilters(Rental.primaryKeyAttribute, queryAtt);

        // @ts-ignore
        return this.model.findAndCountAll({
            attributes: ['rental_id', "rental_date", "inventory_id"],
            include: [
                {model: Customer, attributes: ['customer_id', 'first_name', 'last_name']},
                {model: Staff, attributes: ['staff_id', 'first_name', 'last_name']}
            ],
            ...filters
        });
    };
};

export default RentalRepository;