import { IUserRepository } from '@/app/database/repositories';
import IAddressRepository from '@/app/database/repositories/IAddressRepository';
import ICityRepository from '@/app/database/repositories/ICityRepository';
import ICountryRepository from '@/app/database/repositories/ICountryRepository';
import ICustomerRepository from '@/app/database/repositories/ICustomerRepository';
import { UserRepository } from '@/app/database/repositories/implementation';
import AddressRepository from '@/app/database/repositories/implementation/AddressRepository';
import CityRepository from '@/app/database/repositories/implementation/CityRepository';
import CountryRepository from '@/app/database/repositories/implementation/CountryRepository';
import CustomerRepository from '@/app/database/repositories/implementation/CustomerRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<ICustomerRepository>("CustomerRepository", CustomerRepository);
container.registerSingleton<ICityRepository>("CityRepository", CityRepository);
container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository);
container.registerSingleton<ICountryRepository>("CountryRepository", CountryRepository);
