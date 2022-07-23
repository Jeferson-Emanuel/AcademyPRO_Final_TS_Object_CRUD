import { NOW } from 'sequelize';
import {AllowNull, BelongsTo, Column, Default, ForeignKey, HasMany, Model, PrimaryKey, Table, UpdatedAt} from 'sequelize-typescript';
import Inventory from './InventoryModel';
import Payment from './PaymentModel';
import Staff from './StaffModel';

@Table({
    tableName: 'rental'
})
class Rental extends Model{
    @PrimaryKey
    @Column
    rental_id!: number

    @AllowNull(false)
    @Column
    rental_date!: Date

    @ForeignKey(() => Inventory)
    @AllowNull(false)
    @Column
    inventory_id!: number
    
    @ForeignKey(() => Customer)
    @AllowNull(false)
    @Column
    customer_id!: number

    @AllowNull(true)
    @Column
    return_date!: Date

    @ForeignKey(() => Staff)
    @AllowNull(false)
    @Column
    staff_id!: number

    @Default(NOW)
    @UpdatedAt
    last_update!: Date

    @BelongsTo(() => Customer)
    customer!: Customer
    @BelongsTo(() => Inventory)
    inventory!: Inventory;
    @BelongsTo(() => Staff)
    staff!: Staff

    @HasMany(() => Payment)
    payments!: Payment[]
};

export default Rental;