import { AllowNull, AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import Rental from './RentalModel';
import Staff from './StaffModel';

@Table({
    tableName: 'payment'
})
class Payment extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    payment_id!: number

    //@ForeignKey(() => Customer)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    customer_id!: number

    @ForeignKey(() => Staff)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    staff_id!: number

    @ForeignKey(() => Rental)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    rental_id!: number

    @AllowNull(false)
    @Column(DataType.DECIMAL(5,2))
    amount!: number

    @AllowNull(false)
    @Column(DataType.DATE)
    payment_date!: Date

    //@BelongsTo(() => Customer)
    //customer!: Customer
    @BelongsTo(() => Staff)
    staff!: Staff
    @BelongsTo(() => Rental)
    rental!: Rental
};

export default Payment;