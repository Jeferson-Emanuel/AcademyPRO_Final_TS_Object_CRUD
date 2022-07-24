import { IUserRepository } from '@/app/database/repositories';
import { UserRepository } from '@/app/database/repositories/implementation';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
