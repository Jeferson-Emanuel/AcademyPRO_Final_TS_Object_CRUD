import { StoreInput, StoreOutput } from '@/shared/types/interfaces/Store';
import { BaseRepository } from '.';
import Store from '../../models/StoreModel';
import IStoreRepository from '../IStoreRepository';

class StoreRepository extends BaseRepository<StoreInput, StoreOutput> implements IStoreRepository{
    constructor(){
        super(Store);
    };
};

export default StoreRepository;