import Country from "../../models/CountryModel";
import { CountryInput, CountryOutput } from '@/shared/types/interfaces/Country';
import ICountryRepository from "../ICountryRepository";
import BaseRepository from "./BaseRepository";


class CountryRepository extends BaseRepository<CountryInput, CountryOutput>
implements ICountryRepository
{
    constructor() {
        super(Country)
    }
}
    

export default CountryRepository;
