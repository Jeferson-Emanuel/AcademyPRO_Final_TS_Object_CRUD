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
    PrimaryKey,
    BelongsTo
} from "sequelize-typescript";
import { NOW } from 'sequelize';
import Country from './CountryModel';

@Table ({
    tableName: 'city'
})
class City extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    city_id!: number;

    @Length({max: 100})
    @AllowNull(false)
    @Column
    city!: string;

    @ForeignKey(() => Country)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    country_id!: number;

    @BelongsTo(() => Country)
    country!: Country

    @Default(NOW)
    @UpdatedAt
    @Column(DataType.DATE)
    last_update!: Date
}

export default City;