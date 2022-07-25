import {CountryInput, CountryOutput } from '@/shared/types/interfaces/Country'
import IBaseRepository from './IBaseRepository';
import Country from "../models/CountryModel";

interface ICountryRepository extends IBaseRepository<CountryInput, CountryOutput> {
    getAll(attributes?: string[]): Promise<CountryOutput[]>;

    getById(id: number, attributes?: string[]): Promise<CountryOutput>;

    create(data: CountryInput): Promise<Country>;

    updateById(id: number, data: CountryInput): Promise<CountryOutput>;

    deleteById(id: number): Promise<boolean>;
}

export default ICountryRepository;