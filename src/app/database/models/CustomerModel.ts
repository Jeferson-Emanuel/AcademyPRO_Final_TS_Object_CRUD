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
} from "sequelize-typescript";
import { NOW } from 'sequelize';
import Address from './AddressModel';

@Table({
    tableName: 'customer'
})
class Customer extends Model {
    @Column ({ primaryKey: true })
    customer_id!: number;

    @AllowNull(false)
    @Column
    store_id!: number;

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

    @Column
    activebool!: boolean;

    create_date!: Date;

    @Default(NOW)
    @UpdatedAt
    last_update!: Date

    @AllowNull(false)
    @Default(true)
    @Column
    active!: Boolean


};

export default Customer;