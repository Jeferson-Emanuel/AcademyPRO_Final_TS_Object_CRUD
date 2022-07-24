import { NOW } from 'sequelize';
import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import Inventory from './InventoryModel';
import Payment from './PaymentModel';
import Staff from './StaffModel';

@Table({
    tableName: 'rental'
})
class Rental extends Model{
    @PrimaryKey
    @Column(DataType.INTEGER)
    rental_id!: number

    @AllowNull(false)
    @Column(DataType.DATE)
    rental_date!: Date

    @ForeignKey(() => Inventory)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    inventory_id!: number
    
    //@ForeignKey(() => Customer)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    customer_id!: number

    @AllowNull(true)
    @Column(DataType.DATE)
    return_date!: Date

    @ForeignKey(() => Staff)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    staff_id!: number

    @Default(NOW)
    @UpdatedAt
    @Column(DataType.DATE)
    last_update!: Date

    //@BelongsTo(() => Customer)
    //customer!: Customer
    @BelongsTo(() => Inventory)
    inventory!: Inventory;
    @BelongsTo(() => Staff)
    staff!: Staff

    @HasMany(() => Payment)
    payments!: Payment[]
};

export default Rental;