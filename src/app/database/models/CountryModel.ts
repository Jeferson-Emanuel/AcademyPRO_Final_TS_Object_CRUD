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

@Table ({
    tableName: 'country'
})
class Country extends Model {
    @Column ({ primaryKey: true })
    country_id!: number;

    @Length({max: 100})
    @AllowNull(false)
    @Column
    country!: string;

    @Default( NOW )
    @UpdatedAt
    last_update!: Date
}

export default Country;

