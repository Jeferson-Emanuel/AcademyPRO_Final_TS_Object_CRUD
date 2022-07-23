import { AllowNull, BelongsTo, Column, ForeignKey, HasMany, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import Film from './FilmModel';
import Rental from './RentalModel';

@Table({
    tableName: 'inventory'
})
class Inventory extends Model {
    @PrimaryKey
    @Column
    inventory_id!: number;

    @ForeignKey(() => Film)
    @Column
    film_id!: number;

    @AllowNull(false)
    @Column
    store_id!: number;

    @UpdatedAt
    last_update!: Date;

    @BelongsTo(() => Film)
    film!: Film
    @HasMany(() => Rental)
    rentals!: Rental[]
};

export default Inventory;