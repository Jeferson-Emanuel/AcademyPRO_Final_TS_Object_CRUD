import { StaffInput, StaffOutput } from '@/shared/types/interfaces/Staff';
import { BaseRepository } from '.';
import Staff from '../../models/StaffModel';
import IStaffRepository from '../IStaffRepository';

class StaffRepository extends BaseRepository<StaffInput, StaffOutput> implements IStaffRepository{
    constructor(){
        super(Staff);
    };
};

export default StaffRepository;