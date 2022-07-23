import {
    Table,
    Column,
    Model,
    Length,
    AllowNull,
    UpdatedAt,
    AutoIncrement,
} from "sequelize-typescript";

@Table
class Inventory extends Model {
    @Length({ max: 255 })
    @AutoIncrement
    @AllowNull(false)
    @Column 
    inventory_id! : number;

    @Length({ max: 255 })
    @AutoIncrement
    @AllowNull(false)
    @Column 
    film_id! : number;

    @Length({ max: 255 })
    @AutoIncrement
    @AllowNull(false)
    @Column 
    store_id! : number;

    @UpdatedAt
    last_update!: Date;
}

export default Inventory;