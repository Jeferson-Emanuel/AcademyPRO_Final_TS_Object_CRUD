export interface AddressInput {
    address_id: number,
    address: string,
    address2: string,
    district: string,
    city_id: number,
    postal_code: string,
    phone: string,
    last_update: Date
}

export interface AddressOutput {
    address_id: number,
    address: string,
    address2: string,
    district: string,
    city_id: number,
    postal_code: string,
    phone: string
}