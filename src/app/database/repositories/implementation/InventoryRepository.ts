import { InventoryInput, InventoryOutput } from '@/shared/types/interfaces/Inventory';
import { BaseRepository } from '.';
import Inventory from '../../models/InventoryModel';
import IInventoryRepository from '../IInventoryRepository';

class InventoryRepository extends BaseRepository<InventoryInput, InventoryOutput> implements IInventoryRepository{
    constructor(){
        super(Inventory);
    };
};

export default InventoryRepository;