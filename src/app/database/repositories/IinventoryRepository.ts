import { InventoryInput, InventoryOutput } from '@/shared/types/interfaces/Inventory';
import { Inventory } from '../models';
import IBaseRepository from './IBaseRepository';

interface iInventoryRepository extends IBaseRepository<InventoryInput, InventoryOutput> {

}

export default iInventoryRepository;