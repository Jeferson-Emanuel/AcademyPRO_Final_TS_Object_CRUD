import {CityInput, CityOutput } from '@/shared/types/interfaces/City'
import IBaseRepository from './IBaseRepository';
import  City  from "../models/CityModel";

interface ICityRepository extends IBaseRepository<CityInput, CityOutput> {
 
}

export default ICityRepository;