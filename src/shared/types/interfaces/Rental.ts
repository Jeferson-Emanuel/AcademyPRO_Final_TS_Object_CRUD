export interface RentalInput{
    rental_date: string,
    inventory_id: number
    customer_id: number,
    //return_date: string,
    staff_id: number
};

export interface RentalOutput{
    rental_id: number,
    rental_date: string,
    inventory_id: number
    customer_id: number,
    return_date: string,
    staff_id: number
};