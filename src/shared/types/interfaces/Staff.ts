export interface StaffInput{
    first_name: string,
    last_name: string,
    address_id: number,
    email: string,
    store_id: number,
    username: string,
    password: string,
    picture: string
};

export interface StaffOutput{
    staff_id : number,
    first_name: string,
    last_name: string,
    address_id: number,
    email: string,
    store_id: number,
    username: string,
    password: string,
    picture: string
};