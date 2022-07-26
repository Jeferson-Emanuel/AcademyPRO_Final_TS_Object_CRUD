import {
    Table,
    Column,
    Model,
    Length,
    AllowNull,
    UpdatedAt,
    Default,
    AutoIncrement,
    DataType,
    PrimaryKey,
} from "sequelize-typescript";
import { NOW } from 'sequelize';

@Table ({
    tableName: 'country'
})
class Country extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER) 
    country_id!: number;

    @Length({max: 100})
    @AllowNull(false)
    @Column
    country!: string;

    @Default( NOW )
    @UpdatedAt
    @Column(DataType.DATE)
    last_update!: Date
}

export default Country;

