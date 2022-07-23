import { NOW } from 'sequelize';
import { AllowNull, BelongsTo, Column, Default, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import Staff from './StaffModel';

@Table({
    tableName: 'store'
})
class Store extends Model{
    @PrimaryKey
    @Column
    store_id!: number

    @ForeignKey(() => Staff)
    @AllowNull(false)
    @Column
    manager_staff_id!: number

    @ForeignKey(() => Address)
    @AllowNull(false)
    @Column
    address_id!: number

    @Default(NOW)
    @UpdatedAt
    @Column
    last_update!: Date

    @BelongsTo(() => Address)
    address!: Address
    @BelongsTo(() => Staff)
    staff!: Staff
};

export default Store;