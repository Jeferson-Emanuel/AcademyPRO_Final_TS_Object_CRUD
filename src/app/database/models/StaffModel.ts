import { AllowNull, BelongsTo, Column, Default, ForeignKey, HasMany, IsEmail, Length, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import Payment from './PaymentModel';
import Rental from './RentalModel';
import Store from './StoreModel';

@Table({
    tableName: 'staff'
})
class Staff extends Model{
    @PrimaryKey
    @Column
    staff_id!: number

    @Length({max: 45})
    @AllowNull(false)
    @Column
    first_name!: string

    @Length({max: 45})
    @AllowNull(false)
    @Column
    last_name!: string

    @ForeignKey(() => Address)
    @AllowNull(false)
    @Column
    address_id!: number

    @IsEmail
    @Length({max: 50})
    @AllowNull(true)
    @Column
    email!: string

    @AllowNull(false)
    @Column
    store_id!: number

    @AllowNull(false)
    @Default(true)
    @Column
    active!: Boolean

    @Length({max: 16})
    @AllowNull(false)
    @Column
    username!: string

    @Length({max: 40})
    @AllowNull(true)
    @Column
    password!: string

    @UpdatedAt
    last_update!: Date

    @AllowNull(true)
    @Column
    picture!: string

    @BelongsTo(() => Address)
    adress!: Address

    @HasMany(() => Payment)
    payments!: Payment[]
    @HasMany(() => Rental)
    rentals!: Rental[]
    @HasMany(() => Store)
    stores!: Store[]
};

export default Staff;