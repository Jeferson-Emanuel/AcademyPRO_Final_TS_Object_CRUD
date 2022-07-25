import {
    Table,
    Column,
    Model,
    Length,
    AllowNull,
    ForeignKey,
    IsEmail,
    UpdatedAt,
    Default,
    DataType,
    AutoIncrement,
    PrimaryKey,
    BelongsTo,
} from "sequelize-typescript";
import { NOW } from 'sequelize';
import Address from './AddressModel';

@Table({
    tableName: 'customer'
})
class Customer extends Model {
    @PrimaryKey
    @Column(DataType.INTEGER)
    @AutoIncrement
    customer_id!: number;

    // @ForeignKey(() => store)
    @AllowNull(false)
    @Column
    store_id!: number;

    // @BelongsTo(() => store)
    // store!: store

    @Length({max: 50})
    @AllowNull(false)
    @Column
    first_name!: string;

    @Length({max: 50})
    @AllowNull(false)
    @Column
    last_name!: string;

    @IsEmail
    @Length({max: 80})
    @AllowNull(true)
    @Column
    email!: string;

    @ForeignKey(() => Address)
    @AllowNull(false)
    @Column
    address_id!: number;

    @BelongsTo(() => Address)
    address!: Address

    @Column
    activebool!: boolean;

    create_date!: Date;

    @Default(NOW)
    @UpdatedAt
    last_update!: Date

    @AllowNull(false)
    @Default(true)
    @Column(DataType.BOOLEAN)
    active!: Boolean


};

export default Customer;