export interface CityInput {
    city_id: number,
    city: string,
    country_id: number,
    last_update: Date 
}

export interface CityOutput {
    city_id: number,
    city: string,
    country_id: number
}