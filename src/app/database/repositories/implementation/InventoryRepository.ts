import BaseRepository from './BaseRepository';
import { Inventory } from '@/app/database/models';
import IinventoryRepository from '../IinventoryRepository';
import { InventoryInput, InventoryOutput } from '@/shared/types/interfaces/Inventory';

class InventoryRepository extends BaseRepository<InventoryInput, InventoryOutput> implements IinventoryRepository {
  constructor() {
    super(Inventory);
  }


    
}

  


export default InventoryRepository;