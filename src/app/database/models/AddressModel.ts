import {
    Table,
    Column,
    Model,
    Length,
    AllowNull,
    ForeignKey,
    UpdatedAt,
    Default,
    AutoIncrement,
    DataType,
    PrimaryKey
} from "sequelize-typescript";
import { NOW } from 'sequelize';
import City from './CityModel';

@Table ({
    tableName: 'address'
})
class Address extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
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
    @Column(DataType.INTEGER)
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
    @Column(DataType.DATE)
    last_update!: Date
}

export default Address;