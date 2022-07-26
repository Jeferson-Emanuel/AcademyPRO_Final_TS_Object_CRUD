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
    modelName: 'customer'
})
class Customer extends Model {
    @PrimaryKey
    @Column
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

    @Default(NOW())
    @Column
    @UpdatedAt
    last_update!: Date

    @AllowNull(false)
    @Column
    active!: number


};

export default Customer;