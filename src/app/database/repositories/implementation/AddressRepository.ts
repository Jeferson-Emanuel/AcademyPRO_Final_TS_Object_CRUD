import Address from "../../models/AddressModel";
import { AddressInput, AddressOutput } from '@/shared/types/interfaces/Address';
import IAddressRepository from "../IAddressRepository";
import BaseRepository from "./BaseRepository";

class AddressRepository extends BaseRepository<AddressInput, AddressOutput> 
    implements IAddressRepository
{
    constructor(){
        super(Address)
    }
}

export default AddressRepository;