import {
    Table,
    Column,
    Model,
    CreatedAt,
    UpdatedAt,
    IsEmail,
    Length,
    AllowNull,
    Unique,
    Default,
} from "sequelize-typescript";

@Table
class Teste extends Model{
    @Length({min: 3, max: 255})
    @AllowNull(false)
    @Column
    name!: string;

    @Length({max: 3})
    @AllowNull(false)
    @Column
    age!: number;
}

export default Teste;