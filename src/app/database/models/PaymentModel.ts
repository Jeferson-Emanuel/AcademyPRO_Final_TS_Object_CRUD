import { AllowNull, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Rental from './RentalModel';
import Staff from './StaffModel';

@Table({
    tableName: 'payment'
})
class Payment extends Model{
    @PrimaryKey
    @Column
    payment_id!: number

    @ForeignKey(() => Customer)
    @AllowNull(false)
    @Column
    customer_id!: number

    @ForeignKey(() => Staff)
    @AllowNull(false)
    @Column
    staff_id!: number

    @ForeignKey(() => Rental)
    @AllowNull(false)
    @Column
    rental_id!: number

    @AllowNull(false)
    @Column
    amount!: number

    @AllowNull(false)
    @Column
    payment_date!: Date

    @BelongsTo(() => Customer)
    customer!: Customer
    @BelongsTo(() => Staff)
    staff!: Staff
    @BelongsTo(() => Rental)
    rental!: Rental
};

export default Payment;