import City from "../../models/CityModel";
import { CityInput, CityOutput } from '@/shared/types/interfaces/City';
import ICityRepository from "../ICityRepository";
import BaseRepository from "./BaseRepository";

class CityRepository extends BaseRepository<CityInput, CityOutput> 
    implements ICityRepository
{
    constructor(){
        super(City);
    }
};

export default CityRepository;