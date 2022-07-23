import { IUserRepository } from '@/app/database/repositories';
import IinventoryRepository from '@/app/database/repositories/IinventoryRepository';
import { InventoryRepository, UserRepository } from '@/app/database/repositories/implementation';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IinventoryRepository>("InventoryRepository", InventoryRepository)