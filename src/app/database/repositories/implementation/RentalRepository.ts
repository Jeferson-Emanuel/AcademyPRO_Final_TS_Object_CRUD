import { RentalInput, RentalOutput } from '@/shared/types/interfaces/Rental';
import { BaseRepository } from '.';
import Rental from '../../models/RentalModel';
import IRentalRepository from '../IRentalRepository';

class RentalRepository extends BaseRepository<RentalInput, RentalOutput> implements IRentalRepository{
    constructor(){
        super(Rental);
    };
};

export default RentalRepository;