import {
    Table,
    Column,
    Model,
    Length,
    AllowNull,
    ForeignKey,
    UpdatedAt,
    Default,
} from "sequelize-typescript";
import { NOW } from 'sequelize';
import City from './CityModel';

@Table ({
    tableName: 'address'
})
class Address extends Model {
    @Column ({ primaryKey: true })
    address_id!: number;

    @Length({max: 200})
    @AllowNull(false)
    @Column
    address!: string;

    @Length({max: 200})
    @Column
    address2!: string;

    @Length({max: 200})
    @AllowNull(false)
    @Column
    district!: string;

    @ForeignKey(() => City)
    @AllowNull(false)
    @Column
    city_id!: number;

    @Length({max: 20})
    @Column
    postal_code!: string;

    @Length({max: 20})
    @AllowNull(false)
    @Column
    phone!: string;

    @Default(NOW)
    @UpdatedAt
    last_update!: Date
}

export default Address;