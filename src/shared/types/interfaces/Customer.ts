export interface CustomerInput {
    customer_id: number,
    store_id: number,
    first_name: string,
    last_name: string,
    email: string,
    address_id: string,
    activebool: boolean,
    create_date: Date,
    last_update: Date,
    active: boolean
}

export interface CustomerOutput {
    customer_id: number,
    store_id: number,
    first_name: string,
    last_name: string,
    email: string,
    address_id: string,
    activebool: boolean,
    create_date: Date,
    last_update: Date,
    active: boolean

}