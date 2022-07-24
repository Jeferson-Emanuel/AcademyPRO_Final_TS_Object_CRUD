import { NOW } from 'sequelize';
import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import Staff from './StaffModel';

@Table({
    tableName: 'store'
})
class Store extends Model{
    @PrimaryKey
    @Column(DataType.INTEGER)
    store_id!: number

    @ForeignKey(() => Staff)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    manager_staff_id!: number

    //@ForeignKey(() => Address)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    address_id!: number

    @Default(NOW)
    @UpdatedAt
    @Column(DataType.DATE)
    last_update!: Date

    //@BelongsTo(() => Address)
    //address!: Address
    @BelongsTo(() => Staff)
    staff!: Staff
};

export default Store;