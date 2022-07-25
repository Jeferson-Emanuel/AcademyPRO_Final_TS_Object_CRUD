import {CityInput, CityOutput } from '@/shared/types/interfaces/City'
import IBaseRepository from './IBaseRepository';
import  City  from "../models/CityModel";

interface ICityRepository extends IBaseRepository<CityInput, CityOutput> {
    getAll(attributes?: string[]): Promise<CityOutput[]>;

    getById(id: number, attributes?: string[]): Promise<CityOutput>;

    create(data: CityInput): Promise<City>;

    updateById(id: number, data: CityInput): Promise<CityOutput>;

    deleteById(id: number): Promise<boolean>;
}

export default ICityRepository;