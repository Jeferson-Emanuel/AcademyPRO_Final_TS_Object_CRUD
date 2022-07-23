import { PaymentInput, PaymentOutput } from '@/shared/types/interfaces/Payment';
import { BaseRepository } from '.';
import Payment from '../../models/PaymentModel';
import IPaymentRepository from '../IPaymentRepository';

class PaymentRepository extends BaseRepository<PaymentInput, PaymentOutput> implements IPaymentRepository{
    constructor(){
        super(Payment);
    };
};

export default PaymentRepository;