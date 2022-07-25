import {CountryInput, CountryOutput } from '@/shared/types/interfaces/Country'
import IBaseRepository from './IBaseRepository';
import Country from "../models/CountryModel";

interface ICountryRepository extends IBaseRepository<CountryInput, CountryOutput> {
   
}

export default ICountryRepository;