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
import Country from './CountryModel';

@Table ({
    tableName: 'city'
})
class City extends Model {
    @Column ({ primaryKey: true })
    city_id!: number;

    @Length({max: 100})
    @AllowNull(false)
    @Column
    city!: string;

    @ForeignKey(() => Country)
    @AllowNull(false)
    @Column
    country_id!: number;

    @Default(NOW)
    @UpdatedAt
    last_update!: Date
}

export default City;