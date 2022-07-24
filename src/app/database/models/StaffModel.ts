import { AllowNull, AutoIncrement, Column, DataType, Default, HasMany, IsEmail, Length, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import Payment from './PaymentModel';
import Rental from './RentalModel';
import Store from './StoreModel';

@Table({
    tableName: 'staff'
})
class Staff extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    staff_id!: number

    @Length({max: 45})
    @AllowNull(false)
    @Column(DataType.STRING(45))
    first_name!: string

    @Length({max: 45})
    @AllowNull(false)
    @Column(DataType.STRING(45))
    last_name!: string

    //@ForeignKey(() => Address)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    address_id!: number

    @IsEmail
    @Length({max: 50})
    @AllowNull(true)
    @Column(DataType.STRING(50))
    email!: string

    @AllowNull(false)
    @Column(DataType.INTEGER)
    store_id!: number

    @AllowNull(false)
    @Default(true)
    @Column(DataType.BOOLEAN)
    active!: Boolean

    @Length({max: 16})
    @AllowNull(false)
    @Column(DataType.STRING(16))
    username!: string

    @Length({max: 40})
    @AllowNull(true)
    @Column(DataType.STRING(40))
    password!: string

    @UpdatedAt
    last_update!: Date

    @AllowNull(true)
    @Column(DataType.BLOB)
    picture!: string

    //@BelongsTo(() => Address)
    //adress!: Address

    @HasMany(() => Payment)
    payments!: Payment[]
    @HasMany(() => Rental)
    rentals!: Rental[]
    @HasMany(() => Store)
    stores!: Store[]
};

export default Staff;